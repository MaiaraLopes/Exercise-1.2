let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, types: ['fire']},
    {name: 'Squirtle', height: 0.5, types: ['water']},
    {name: 'Caterpie', height: 0.3, types: ['bug']}
];

for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height > 0.6) {
        document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " Wow, that\'s big!");
    } else {
        document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")");
    }
    document.write('<br>');
}





// if (pokemon[i].age <19 && person[i].age >13){  
// }else if (person[i].age <13){
//     console.log(person[i].name + " is a child");
//   }else {
//     console.log(person[i].name + " is an adult");
//   }