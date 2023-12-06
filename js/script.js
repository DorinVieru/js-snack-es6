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


// --------- SNACK 2 ---------
// DEFINISCO ARRAY DI OGGETTI DI SQUADRE DI CALCIO
let teams = [
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Atalanta",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
]

// CREO NUOVO ARRAY PER INSERIRE I PUNTI FATTI E I FALLI SUBITI E 
let squadra = [], points = [], falls = []; 

// CREO CICLO FOR EACH
teams.forEach((elem) => {

    // DESTRUTTURO L'ARRAY ORIGINALE TEAMS
    let { nome, punti_fatti, falli_subiti } = elem;
    
    // CREO NUMERO RANDOM PER PUNTI FATTI E FALLI SUBITI
    points = Math.floor(Math.random() * 100 + 1)
    falls = Math.floor(Math.random() * 10 + 1)

    elem.punti_fatti = points;
    elem.falli_subiti = falls;
    console.log(elem);

    squadra = `Squadra: ${nome} / Falli subiti: ${falls}`;
    console.log(squadra);
})