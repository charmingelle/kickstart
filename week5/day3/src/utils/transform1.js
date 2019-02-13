module.exports = function(babel) {
  const t = babel.types;

  return {
    visitor: {
      Program: {
        enter(path, state) {
          console.log("--- Program");
        }
      },

      NumericLiteral(path) {
        path.node.value *= 2;
      }
    }
  };
};
