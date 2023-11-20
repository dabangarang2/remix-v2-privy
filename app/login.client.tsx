/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { usePrivy } from "@privy-io/react-auth";
import React from "react";


export default function LoginButton(): JSX.Element {
  const {login} = usePrivy()
  return <button onClick={login}>Log in</button>
}
