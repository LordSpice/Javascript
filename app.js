
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
                    dinos.push(new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact, image))
                }
            )
        );

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
    }
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareWeight(dino) {
        if (dino.weight == human.weight) {
            return 'You weigh the same as a ' + dino.species;
        } else {
            return dino.weight > human.weight ? 'You weigh less than a ' + dino.species : 'You weight more than a ' + dino.species;
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(dino) {
        if (dino.height == human.height) {
            return 'Your height is the same as a ' + dino.species;
        } else {
            return dino.height > human.height ? 'Your height is less than a ' + dino.species : 'Your height is more than a ' + dino.species;
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareName(dino) {
        if (dino.species.length == human.name.length) {
            return 'Your name is as long as the name of a ' + dino.species;
        } else {
            return dino.species.length > human.name.length ? 'Your name is shorter than the name of a ' + dino.species : 'Your name is longer than the name of a ' + dino.species;
        }
    }

    // Generate Tiles for each Dino in Array
    const grid = document.getElementById('grid');
    const tiles = [];

    function getTiles() {
        dinos.forEach(dino => {
            /* @var ran random number to specify fact
            ** multiplying by 5 to make compareHeight and dino.fact more frequent 
            */
            const ran = Math.floor(Math.random() * 5)
            
            pigeon = dino.species.toLowerCase() == 'pigeon' ? true : false;
            let fact = dino.fact;

            if (!pigeon) {
                switch (ran) {
                    case 0: fact = compareHeight(dino); break;
                    case 1: fact = compareHeight(dino); break;
                    case 2: fact = compareWeight(dino); break;
                    case 3: fact = compareName(dino); break;
                }
            }
            const container = createTile(dino.species, dino.image, fact);

            tiles.push(container);
        })
    }
        // Add tiles to DOM
        function initializeDOM() {
            getTiles()

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

// On button click, prepare and display infographic
