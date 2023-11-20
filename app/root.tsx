import './process';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { PrivyProvider } from "@privy-io/react-auth";
import { useEffect, useState } from "react";


export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = ${JSON.stringify({
              LINK_API_URL: 'https://walletlink.org'
            })}`,
          }}
        />
        <PrivyProvider
          appId={'clasv4sso0008lb08yk5mvmk0'}
          onSuccess={() => console.log('user logged in!')}
        >
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </PrivyProvider>
      </body>
    </html>
  );
}
