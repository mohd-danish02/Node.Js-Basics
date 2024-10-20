function add(a, b) {
  return a + b;
}
function sub(x, y) {
  return x - y;
}
let num1 = "Danish";
const num2 = "Khan";

module.exports = { add, sub, num1, num2 };
// module.exports = "1";//over write kr dega
// module.exports = "2";//print kr dega
// module.exports = {
//   addFn: add,
//   subFn: sub,
// };
// this is a preffred way of exporting funcion

// another way of exporting function this is not a preffred way

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
