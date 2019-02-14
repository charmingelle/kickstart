module.exports = function (babel) {
  const t = babel.types

  return {
    visitor: {
      Program: {
        enter(path, state) {
          console.log('--- [Program](enter)')
        },
      },

      NumericLiteral(path) {
        path.node.value *= 2
      },
    },
  }
}
