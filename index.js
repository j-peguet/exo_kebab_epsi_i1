const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const R = require('ramda')

let kebabs = [{
        name: "Kebab du chef",
        ingredient: [{
            name: "Tomate",
            name: "Salade",
            name: "Viande",
            name: "Oignon",
        }],
        isVegan: false
    },
    {
        name: "Kebab du maitre",
        ingredient: [{
            name: "Tomate",
            name: "Salade",
            name: "Oignon",
        }],
        isVegan: true
    }
]

console.log("Voici la liste des kebabs")
console.log(kebabs.map(kebab => kebab.name))

readline.question(`Renseignement sur votre kebab: `, name => {
    let kebabFind = kebabs.find(kebab => kebab.name === name)

    let validate = R.ifElse(
        () => !R.isNil(kebabFind),
        () => kebabFind.isVegan ? console.log("Votre Kebab est vegetarien") : console.log("Votre Kebab n'est pas Vegetarien"),
        () => console.log("Nom incorrect")

    )

    validate()

    readline.close()
})