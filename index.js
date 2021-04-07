const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const question = question_text => new Promise((resolve, reject) => rl.question(question_text, answer => resolve(answer)))
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

let ingredients = ["Tomate", "Salade", "Viande", "Oignon", "Poisson", "Crevetes"]
let ingredientsNonVegan = ["Viande"]
let ingredientsNonPes = ["Poisson", "Crevetes", "Viande"]
async function main(){



console.log("Voici la liste des ingredients")
console.log(ingredients.map(ingredient => ingredient))

let mon_kebab = []
let question_ingredient
do {
    question_ingredient = await question(`Ajouter ingredient (oui ou non): `)
    if (question_ingredient && question_ingredient != 'non') {
        let ingredient
        do{
          ingredient = await question(`Saisir l'ingredient': `)
        }while(ingredient instanceof String)

        mon_kebab.push(ingredient)
    }
} while (question_ingredient !== 'non')

rl.close()

console.log("Voici la liste des ingredients du kebab")
console.log(mon_kebab.map(ingredient => ingredient))

if(!mon_kebab.includes("Poisson")){
    console.log(`Kebab est pas pescetarien`)
} else{
    console.log(`Kebab n'est pas pescetarien`)
}
if(!mon_kebab.includes("Viande")){
    console.log(`Kebab est vegetarien`)
}
else {
    console.log(`Kebab n'est pas vegetarien`)
}

}

main()