// // Your code here

document.addEventListener("DOMContentLoaded", function() {
    console.log("Test - DOM is loaded")
})

// const parseJSON = resp => resp.json()
const BASE_URL = 'http://localhost:3000/characters';

// const characterInfo = document.querySelector('characterInfo'); //where characters generate
// const cuteForm = document.getElementById('votes-form')


// console.log (characterInfo)
// console.log(cuteForm)
    // const div = document.createElement('div') //all characters inside w/ id of 'character-bar'
const characterBar = document.getElementById('character-bar');

// console.log (characterBar)

function renderCuties (character){
    const cutieNames = cuties.map(character => `${character.name}`)    const span = document.createElement('span')


    span.textContent = `${character.name}`;
    div.characterBar.appendChild(span)
         cuties.forEach(renderCuties);
}

// const cutieNames = cuties.map(character => {
//     return`${character.name}`
// }).join('');
// console.log(cutieNames)
// characterBar.insertAdjacentHTML("afterbegin", cutieNames);

function getAllCuties() {
    fetch(`${BASE_URL}`)
        .then(response => {
            if(!response.ok) {
                throw Error("Error")
            }
            return response.json()
        })
        .then(cuties => {
            console.log(cuties);
            cuties.forEach(renderCuties);
        })
        .catch(error => 
            console.log(error)
        )
    }

    getAllCuties();