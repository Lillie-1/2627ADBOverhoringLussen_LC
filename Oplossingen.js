//oefening 1
//Vraag of definieer een variabele leeftijd (bijvoorbeeld 17). Controleer met een if / else if / else-structuur:
//Onder de 16 jaar: druk af "Geen toegang."
//Tussen 16 en 17 jaar (inclusief): druk af "Toegang onder begeleiding."
//18 jaar of ouder: druk af "Volledige toegang."
console.log("-oefening 1-");

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
console.log("-oefening 2-");

let temperaturen = [19, 22, 26, 21, 29, 18]

for(temperatuur of temperaturen){
    if(temperatuur>25){
     console.log("Waarschuwing: Hoge temperatuur" + " " + temperatuur);
 }else{
     console.log("Temperatuur normaal" + " " + temperatuur);       
}
}


//Oefening 3: Positieve en negatieve getallen scheiden (for + if/else)
// Gegeven een array: [12, -5, 8, -3, 0, 19, -11]. 
// Gebruik een for-lus om alle strikt positieve getallen in een nieuwe array positief te plaatsen,
//  en alle strikt negatieve getallen in een array negatief (negeer het getal 0).
//  Druk beide arrays achteraf af.
console.log("-oefening 3-");

let getallen = [12, -5, 8, -3, 0, 19, -11]
for(getal of getallen){
    if(getal>0){
        let positief = [getal]     
        console.log(positief);
          
    }else{
        let negatief = [getal]  
        console.log(negatief);
             
    }
}

//Oefening 4: Sparen voor een laptop
// Je wilt een nieuwe laptop kopen van €1200. 
// Je hebt momenteel €250 spaargeld en legt elke maand €150 opzij. 
// Gebruik een while-lus om te berekenen hoeveel maanden je moet sparen
//  tot je minstens €1200 hebt.
//  Druk na de lus het aantal maanden en je uiteindelijke spaarsaldo af.

console.log("-oefening 4-");

let laptop= 1200
let spaargeld = 250
let maand = 0
while (spaargeld<=laptop) {
   spaargeld += 150;
   maand++;
}
   console.log("maand" + " " + maand + " " + spaargeld)

