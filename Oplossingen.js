//oefening 1
//Vraag of definieer een variabele leeftijd (bijvoorbeeld 17). Controleer met een if / else if / else-structuur:
//Onder de 16 jaar: druk af "Geen toegang."
//Tussen 16 en 17 jaar (inclusief): druk af "Toegang onder begeleiding."
//18 jaar of ouder: druk af "Volledige toegang."

let leeftijd = 17;

if(leeftijd<16){
    console.log("Geen toegang");
}else{
    console.log("Volledige toegang");   
}

//Oefening 2: Temperatuurwaarschuwing (if/else)
//Gegeven een array met gemeten temperaturen in een serverruimte: [19, 22, 26, 21, 29, 18].
//  Doorloop de array met een for-lus. 
// Als de temperatuur 25 graden of hoger is, druk je af: "WAARSCHUWING: Hoge temperatuur (X°C)". 
// In alle andere gevallen druk je af: "Temperatuur normaal (X°C)".

let temperaturen = [19, 22, 26, 21, 29, 18]

for(i=0; i>temperaturen.length; i++){
    let temperatuur = temperaturen[i]
    if(temperatuur>25){
        console.log("Waarschuwing: Hoge temperatuur" + temperatuur);
    }else{
        console.log("Temperatuur normaal" + temperatuur);       
    }
}

//Oefening 3: Positieve en negatieve getallen scheiden (for + if/else)
// Gegeven een array: [12, -5, 8, -3, 0, 19, -11]. 
// Gebruik een for-lus om alle strikt positieve getallen in een nieuwe array positief te plaatsen,
//  en alle strikt negatieve getallen in een array negatief (negeer het getal 0). Druk beide arrays achteraf af.