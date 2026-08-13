import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production serves scripts/prerender.ts's real server-rendered markup inside
// #root, so it must be hydrated. The Vite dev server serves an empty #root
// (no prerender step runs in dev) — hydrating that throws a hydration
// mismatch, so dev does a plain client render instead.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
