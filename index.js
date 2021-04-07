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

let sauces = ["blanche", "béchamel", "algérienne", "ketchup", "mayo", "moutarde", "barbecue", "samouraï"]

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

console.log("Voici la liste des ingredients du kebab")
console.log(mon_kebab.map(ingredient => ingredient))

console.log("Voici la liste des sauces")
console.log(sauces.map(sauce => sauce))


let ma_sauce = '';
let question_sauce

question_sauce = await question(`Ajouter une sauce ? (oui ou non): `)
if (question_sauce && question_sauce != 'non') {
    let sauce
    do{
        sauce = await question(`Saisir la sauce': `)
    }while(sauce instanceof String)

    ma_sauce = sauce
}

rl.close()

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

if(ma_sauce === ''){
    console.log("Vous n'avez pas choisi de sauce")
} else {
    console.log(`Avec votre sauce: ${ma_sauce}`)
}

}

main()