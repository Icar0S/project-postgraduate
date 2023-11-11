import inquirer from "inquirer";

inquirer.prompt(
  [
    {
      type: 'input',
      name: 'nome',
      message: 'qual seu nome?'

    },
    {
      type: 'input',
      name: 'dinheiro',
      message: 'qual seu valor?'
    },
    {
      type: 'list',
      name: 'carro',
      message: 'escolha seu carro:',
      choices: [
        'Chevrolet Camaro',
        'BMW Serie 4',
        'Audi A5',
        'Ford Mustang',
        'Honda Civic Si',
        'Nissan GTR',
        'Fiat Punto T-Jet',
        'Volkswagen Golf'
      ]
    }
  ]
).then((answers) => {
  console.log(
    "Olá " + answers.name +
    "pelo valor de " + answers.dinheiro +
    "seu carro é: " + answers.carro
  )
})