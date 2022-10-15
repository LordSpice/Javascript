
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
    const dinos = [];
    fetch('./dino.json')
        .then(result => result.json())
        .then(data => data.Dinos
            .forEach(
                dino => {
                    const image = './images/' + dino.species.toLowerCase() + '.png';
                    // console.log(dino.fact);
                    dinos.push(new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact, image))
                }
            )
        );

    console.log(dinos);
    
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
    const human = {
        name: '',
        height: 0,
        weight: 0,
        diet: '',
        image: './images/human.png',
    };

    // Use IIFE to get human data from form
    document.getElementById('btn').addEventListener('click', getHuman);

    function getHuman() {
        const name = document.getElementById('name').value;
        const feet = document.getElementById('feet').value;
        const inches = document.getElementById('inches').value;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;
        
        let valid = true;

        name != '' ? human.name = name : valid = false;
        feet != '' && inches != '' ? human.height = (parseInt(feet) * 12) + parseInt(inches) : valid = false;
        weight != '' ? human.weight = parseInt(weight) : valid = false;
        human.diet = diet;
        
        if (valid) {
            removeForm()
            initializeDOM()
        } else {
            alert('All fields must be filled')
        }

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
    const tiles = [];

    function getTiles() {
        dinos.forEach(dino => {
            // console.log(dino)
            const container = createTile(dino.species, dino.image, dino.fact);

            console.log(container);
            tiles.push(container);
        })
    }
        // Add tiles to DOM
        function initializeDOM() {
            getTiles()

            console.log(tiles)

            for (let i = 0; i <= tiles.length; i++) {
                if (i < 4) {
                    grid.appendChild(tiles[i])
                } else if (i == 4) {
                    const humanTile = createTile(human.name, human.image);
                    grid.appendChild(humanTile)
                } else {
                    grid.appendChild(tiles[i - 1]);
                }
            }
        }

    // Remove form from screen
    function removeForm() {
        document.getElementById('dino-compare').remove();
    }

    function createTile(title, image, fact = '') {
        // console.log(image, fact)
        const container = document.createElement('div');
        container.className = 'grid-item';
        
        this.title = document.createElement('h3');
        this.image = document.createElement('img');
        this.fact = document.createElement('p');
    
        this.title.innerHTML = title;
        this.image.src = image;
        this.fact.innerHTML = fact;

        container.appendChild(this.title);
        container.appendChild(this.image);
        container.appendChild(this.fact);

        return container;
    }
    // document.getElementById('btn').addEventListener('click', removeForm);

// On button click, prepare and display infographic
