class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}!`; // corrigido: template string correta
  }
}

module.exports = {
  Person,
};
