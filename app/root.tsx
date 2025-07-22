import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/cloudflare';

import '~/styles/index.scss';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.svg',
    type: 'image/svg+xml',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-6xl font-bold text-gray-300">Oops!</h1>
          <div className="text-xl text-gray-500 mt-4">
            {isRouteErrorResponse(error) ? (
              <div>
                <h1>
                  {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
              </div>
            ) : error instanceof Error ? (
              <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
              </div>
            ) : (
              <h1>Unknown Error</h1>
            )}
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}