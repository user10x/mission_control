function denode(input) {
  if (input.toLowerCase() === "node") {
    return input.split(" ").sort().join();
  }
  return input;
}
console.log(denode("NODE"));
