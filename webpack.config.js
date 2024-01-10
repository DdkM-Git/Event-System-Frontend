module.exports = (env, options) => ({
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api"),
      context: path.resolve(__dirname, "src/context"),
      components: path.resolve(__dirname, "src/components"),
      icons: path.resolve(__dirname, "src/icons"),
      images: path.resolve(__dirname, "src/images"),
      layout: path.resolve(__dirname, "src/layout"),
      pages: path.resolve(__dirname, "src/pages"),
      reducers: path.resolve(__dirname, "src/reducers"),
      styles: path.resolve(__dirname, "src/styles"),
      router: path.resolve(__dirname, "src/router"),
      types: path.resolve(__dirname, "src/types"),
      utils: path.resolve(__dirname, "src/utils"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
});
