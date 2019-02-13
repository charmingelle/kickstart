module.exports = function(api) {
  api.cache(false);

  api.assertVersion("7.2");

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            chrome: "58",
            ie: "11"
          }
        }
      ]
    ],
    plugins: [
      "./src/utils/transform1",
      "@babel/plugin-proposal-numeric-separator"
    ]
  };
};
