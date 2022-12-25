/*

Exercicio 2:

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let student = [
  {
    name: "Erick",
    firstTest: 10,
    secondTest: 7
  },
  {
    name: "Tatiane",
    firstTest: 10,
    secondTest: 10
  },
  {
    name: "Ana Julia",
    firstTest: 5,
    secondTest: 9,
  },
  {
    name: "Sofia",
    firstTest: 4,
    secondTest: 9,
  }
]

function calcMed(student) {
  let medTest = (student.firstTest + student.secondTest) / 2

  if(medTest >= 7 ){
    alert(`A nota do(a) ${student.name} foi ${medTest}, você foi aprovado!
      Comemore a sua conquista :)`)
  }
  else{
    alert(`A nota de ${student.name} foi ${medTest} \n Infelizmente você foi reprovado. :(
      Se dedique mais aos estudos`)
  }
}
calcMed(student[0])
calcMed(student[1])
calcMed(student[2])
calcMed(student[3])
