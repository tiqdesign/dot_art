const { names, midNames, lastNames } = require("./config");
const format = [names, midNames, lastNames];

const create = () => {
  let output = [];
  format.forEach((list) => {
    let word = list[Math.floor(Math.random() * list.length)];
    output.push(word);
  });
  return output.join(" ");
};

console.table({ random_name: create() });
