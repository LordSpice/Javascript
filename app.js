
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
            .forEach(
                dino => dinos.push(new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.when, dino.fact, './images/' + dino.species + '.png'))
            )
        );

    // console.log(dinos);
    
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
    };

    // Use IIFE to get human data from form
    document.getElementById('btn').addEventListener('click', getHuman);

    function getHuman() {
        human.name = document.getElementById('name').value;
        human.height = (parseInt(document.getElementById('feet').value) * 12) + parseInt(document.getElementById('inches').value);
        human.weight = document.getElementById('weight').value;
        human.diet = document.getElementById('diet').value;
           
        console.log(human);
    }
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareWeight(dino) {
        if (dino.weight == human.weight) {
            return 'You weigh the same as a ' + dino.name;
        } else {
            return dino.weight < human.weight ? 'You weigh less than a ' + dino.name : 'You weight more than a ' + dino.name;
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(dino) {
        if (dino.height == human.height) {
            return 'Your height is the same as a ' + dino.name;
        } else {
            return dino.height < human.height ? 'Your height is less than a ' + dino.name : 'Your height is more than a ' + dino.name;
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareName(dino) {
        if (dino.name.length == human.name.length) {
            return 'Your name is as long as the name of a ' + dino.name;
        } else {
            return dino.name.length < human.name.length ? 'Your name is shorter than the name of a ' + dino.name : 'Your name is longer than the name of a ' + dino.name;
        }
    }

    // Generate Tiles for each Dino in Array
    const grid = document.getElementById('grid');
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
