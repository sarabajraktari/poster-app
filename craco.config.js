const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/index"),
      "@pages": path.resolve(__dirname, "src/pages/index"),
      "@validators": path.resolve(__dirname, "src/validators/index")
    },
  },
}