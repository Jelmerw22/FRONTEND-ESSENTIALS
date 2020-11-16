let bezoeker = {
    Voornaam : prompt("Wat is uw voornaam?"),
    achternaam : prompt("Wat is uw achternaam?"),
    leeftijd : prompt("Hoe oud ben u?"),
    Woonplaats : prompt("Wat is uw woonplaats?"),
    Email : prompt("Wat is uw e-mailadres?"),
};
console.log(bezoeker);
if(bezoeker.leeftijd==16) {
    document.body.style.backgroundColor="AliceBlue" 
} else {
    document.body.style.backgroundColor="Black"
};

if(bezoeker.leeftijd==17) {
    document.body.style.backgroundColor="BlueViolet"
}
if(bezoeker.leeftijd==18) {
    document.body.style.backgroundColor="Aqua"
}
if(bezoeker.leeftijd==19) {
    document.body.style.backgroundColor="Aquamarine"
}

