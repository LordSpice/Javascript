
    // Create Dino Constructor
    class Dino {
    constructor(species, weight, height, diet, where, when, fact, image) {
        this.species = species,
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
            
    }
};

    // Create Dino Objects
    let dinos = [];
    fetch('./dino.json')
        .then(result => result.json())
        .then(data => data.Dinos
            .forEach(dino => dinos.push(new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.when, dino.fact, './images/' + dino.species + '.png')))
            );
    
    // dinos.forEach(dino => {
    //     species = dino.species;
    //     weight = dino.weight;
    //     height = dino.height;
    //     diet = dino.diet;
    //     where = dino.where;
    //     when = dino.when;
    //     fact = dino.fact;
    //     image = './images/' + dino.species + '.png';

    //     dino = new Dino(species, weight, height, diet, where, when, fact, image)
    //     console.log(dino);
    // });

    // Create Human Object
    human = {
        name: '',
        height: 0,
        weight: '',
        diet: '',
        image: './images/human.png',
    }

    // Use IIFE to get human data from form
    document.getElementById('btn').addEventListener('click', getHuman)

    function getHuman() {
        human.name = document.getElementById('name').innerText;
        //human.height = (parseInt(document.getElementById('heightfeet').innerHTML) * 12) + parseInt(document.getElementById('heightinches').innerHTML);
        human.weight = document.getElementById('weight').innerText;
        human.diet = document.getElementById('diet').innerText;
            
        console.log(dinos);
        console.log(human);
    }
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    document.getElementById('grid')
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
