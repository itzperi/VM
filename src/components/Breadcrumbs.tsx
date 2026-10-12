import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBreadcrumbTrail } from '../lib/breadcrumbs';

/** Visible breadcrumb for every non-home page. Built from the same trail as
 * the BreadcrumbList JSON-LD (lib/breadcrumbs.ts), so they always match. */
export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const trail = getBreadcrumbTrail(pathname);
  if (!trail || trail.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full max-w-7xl mx-auto px-4 md:px-12 pt-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-body text-[#616565] uppercase tracking-wider">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-[#1b1c1a] normal-case tracking-normal">{crumb.name}</span>
              ) : (
                <>
                  <Link to={crumb.path} className="hover:text-[#B04724]">{crumb.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
