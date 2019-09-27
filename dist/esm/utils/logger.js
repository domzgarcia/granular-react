import _typeof from "@babel/runtime/helpers/typeof";

global.dd = function (input) {
  console.clear();
  var print = null;

  if (!input.length && _typeof(input) === 'object') {
    print = "".concat(JSON.stringify(input, null, 4));
    return console.log(print);
  }

  if (input.length && _typeof(input[0]) === 'object') {
    return console.table(input);
  }

  print = input;
  return console.log(print);
};