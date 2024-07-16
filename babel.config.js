module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ".",
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@theme": "./src/theme",
            "@shared": "./src/shared",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@mocks": "./src/mocks"
          }
        }
      ]
    ]
  };
};
