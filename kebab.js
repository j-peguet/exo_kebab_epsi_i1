const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const R = require('ramda');

let sauces = [
    {
        name: "Ketchup"
    },
    {
        name: "Samourai"
    },
    {
        name: "Blanche"
    }
]

let kebabs = [
    {
        name: "Kebab du chef",
        ingredient: [
            {
                name: "Tomate",
                name: "Salade",
            }
        ],
        isVegan: false,
        isPecestarien: false,
        hasOnion: true,
        canHaveDoubleChesse: false
    },
    {
        name: "Kebab du maitre poissonier",
        ingredient: [
            {
                name: "Tomate",
                name: "Salade",
            }
        ],
        isVegan: true,
        isPecestarien: false,
        hasOnion: true,
        canHaveDoubleChesse: false
    },
    {
        name: "Kebab du maitre",
        ingredient: [
            {
                name: "Tomate",
                name: "Salade",
            }
        ],
        isVegan: true,
        isPecestarien: true,
        hasOnion: false,
        canHaveDoubleChesse: true
    }
];

console.log("Voici la liste des kebabs");
console.log(kebabs.map(kebab => kebab.name));

// console.log("Voici la liste des Kebabs Végétarien")
// console.log(kebabs.filter(kebab => kebab.isVegan).map(kebab => kebab.name))

// console.log("Voici la liste des Kebabs Presitarien")
// console.log(kebabs.filter(kebab => kebab.isPresitarien).map(kebab => kebab.name))

readline.question(`Renseignement sur votre kebab: `, name => {
    let kebabFind = kebabs.find(kebab => kebab.name === name)

    let validate = R.ifElse(
        () => !R.isNil(kebabFind),
        () => kebabFind.isPecestarien? console.log("Votre Kebab est Presitarien"): kebabFind.isVegan? console.log("Votre Kebab est vegetarien"): console.log("Votre Kebab n'est pas Vegetarien"),
        () =>  console.log("Nom incorrect")

      );

    validate();

    readline.close()
  })