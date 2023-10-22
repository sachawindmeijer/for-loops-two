// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================
console.log('opdr1');

const names = ["Henk", "Piet", "Fred", "Joop"];

// Itereer door de array en voeg "-je" toe aan elke naam
for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + "je";
}
console.log(names);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names): ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================
console.log('opdr2');
const numbers = [2, 4, 5, 29, 38];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // Het getal is even, vermenigvuldig met 2
        numbers[i] *= 2;
    } else {
        // Het getal is oneven, vermenigvuldig met 3
        numbers[i] *= 3;
    }
}
// Toon de aangepaste array
console.log(numbers);


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================
console.log('opdr3');
const squares = [30, 2, 8, 24, 11];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft:
// [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]
console.log(squares);

for (let i = 0; i < squares.length; i++) {
    const volume = squares[i] * squares[i] * squares[i];
    squares[i] = 'Het volume van ' + squares[i] + ' is ' + volume;
}

console.log(squares)



