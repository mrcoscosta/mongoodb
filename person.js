class Person {
  constructor(name, idade, altura) {
    (this.name = name), (this.idade = idade), (this.altura = altura);
  }
  Diga() {
    return `Hello my name ${this.name} Tenho ${this.idade} e tenho ${this.altura} de altura`;
  }
}

module.exports = {
  Person,
};
