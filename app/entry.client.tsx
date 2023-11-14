/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { PrivyProvider } from "@privy-io/react-auth";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <PrivyProvider
        appId={"clasv4sso0008lb08yk5mvmk0"}
        onSuccess={() => console.log("user logged in!")}
      >
        <RemixBrowser />
      </PrivyProvider>
    </StrictMode>
  );
});
