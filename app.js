class Star {
    constructor(name, age, color, galaxy, distance){
        this.name = name;
        this.age = age;
        this.color = color;
        this.galaxy = galaxy;
        this.distance = distance;
    }
    toHtml(){
        const divStar = document.createElement('div');

        const nameStar = document.createElement('p');
        nameStar.textContent = 'Nom: ' + this.name;
        divStar.appendChild(nameStar);

        const ageStar = document.createElement('p');
        ageStar.textContent = 'Âge: ' + this.age;
        divStar.appendChild(ageStar);

        const colorStar = document.createElement('p');
        colorStar.textContent = 'Couleur: ' + this.color;
        divStar.appendChild(colorStar);

        const whichGalaxy = document.createElement('p');
        whichGalaxy.textContent = 'Galaxie: ' + this.galaxy;
        divStar.appendChild(whichGalaxy);

        const whichDistance = document.createElement('p');
        whichDistance.textContent = 'Distance: ' + this.distance;
        divStar.appendChild(whichDistance);

        return divStar;
    }
}

const stars = [
    new Star("45IR1", 690000, "#F4F6F4", "Andromeda", 100054),
    new Star("45IR2", 680000, "#F4F5F4", "Andromeda", 100353),
    new Star("45IR3", 670000, "#F4F4F4", "Andromeda", 100454),
    new Star("45IR4", 660000, "#F4F3F4", "Andromeda", 100554),
    new Star("45IR5", 650000, "#F4F2F4", "Andromeda", 100654),
    new Star("45IR6", 640000, "#F4F1F4", "Andromeda", 100754),
    new Star("45IR7", 630000, "#F4F0F4", "Andromeda", 100854),
]

for(star of stars){
    document.body.appendChild(stars.toHtml());
}