/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {modules:{events: true, buffer: true, process: true}},
  serverModuleFormat: "cjs"
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
