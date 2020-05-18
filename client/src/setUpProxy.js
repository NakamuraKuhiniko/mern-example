const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );

  app.use(
    "/socket",
    createProxyMiddleware({
      pathRewrite: {
        "^/socket": "",
      },
      target: "http://localhost:9000",
      ws: true,
    })
  );
};
