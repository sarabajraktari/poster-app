const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/index"),
      "@pages": path.resolve(__dirname, "src/pages/index"),
      "@validators": path.resolve(__dirname, "src/validators/index"),
      "@hooks": path.resolve(__dirname, "src/hooks/index"),
      "@enums": path.resolve(__dirname, "src/enums/index"),
      "@context":path.resolve(__dirname,"src/context/index"),
      "@interfaces":path.resolve(__dirname,"src/interfaces/index"),
      "@config":path.resolve(__dirname,"src/config/index"),
      "@api":path.resolve(__dirname,"src/api/index"),
      "@utils":path.resolve(__dirname,"src/utils/index")
    },
  },
};
