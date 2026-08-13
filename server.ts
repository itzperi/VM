import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { SITE_URL } from "./src/lib/siteConfig";

const CANONICAL_HOST = new URL(SITE_URL).host;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Enforce HTTPS + the single canonical host (per SITE_URL) in production so
  // Google never sees the same page served from two different origins
  // (duplicate-content / diluted ranking signal risk). Trusts the reverse
  // proxy's X-Forwarded-* headers — set `app.set('trust proxy', 1)` at the
  // platform level if this runs behind one that doesn't already.
  if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
      const forwardedProto = req.headers["x-forwarded-proto"];
      const isHttps = forwardedProto === "https" || req.secure;
      const host = req.headers.host;
      if (!isHttps || (host && host !== CANONICAL_HOST)) {
        return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
      }
      next();
    });
  }

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Visalatchi Packaging Portal" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Prerendered HTML must revalidate (content changes on every deploy);
    // hashed Vite assets (JS/CSS/images under /assets) are safe to cache hard.
    app.use(
      express.static(distPath, {
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
          } else if (filePath.includes(`${path.sep}assets${path.sep}`)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
        },
      }),
    );
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Visalatchi Packaging Server running on http://localhost:${PORT}`);
  });
}

startServer();
