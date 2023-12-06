// --------- SNACK 1 ---------
// DEFINISCO ARRAY OGGETTO DI BICI
const bicycle = [
    {
        nome: "BMx",
        peso: 15
    },
    {
        nome: "Graziella",
        peso: 20
    },
    {
        nome: "Sportiva",
        peso: 10
    },
    {
        nome: "Montan Bike",
        peso: 13
    },
    {
        nome: "Bici a caso",
        peso: 18
    },
]

// CREO NUOVO ARRAY PER INSERIRE LA BICICLETTA CON IL PESO MINORE
let bike_min = [];

// CICLO FOR EACH
bicycle.forEach((elem) => {
    
    // DESTRUTTURO L'ARRAY BICYCLE ORIGINALE
    let { nome, peso } = elem;

    // CREO LA CONDIZIONE PER VERIFICA IL PESO MINORE TRA LE BICI
    if (Math.min(peso) <= 10){
        bike_min = `Tipo di bici e peso: ${nome} - ${peso}`;
    }
})
// STAMPO IN CONSOLE IL RISULTATO FINALE
console.log(bike_min);


