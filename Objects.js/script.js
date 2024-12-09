// Exercício 1
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
  };
  
  // Imprimindo título e autor do livro
  console.log("Título:", livro.titulo);
  console.log("Autor:", livro.autor);
  
  // Exercício 2
  const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020
  };
  
  // Atualizando o ano do carro e adicionando a cor
  carro.ano = 2022;
  carro.cor = "Prata";
  
  // Exibindo o carro atualizado
  console.log("Carro atualizado:", carro);
  
  // Exercício 3
  const pessoa = {
    nome: "Carlos",
    idade: 28,
    cumprimento() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  
  // Imprimindo a mensagem de cumprimento
  console.log(pessoa.cumprimento());