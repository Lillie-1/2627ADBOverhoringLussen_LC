# Overhoring: Selecties (`if/else`) en Iteraties (`for`, `while`, `do...while`)

## Niveau 1: Basis (`if/else` en `for`)

### Oefening 1: Toegangscontrole op basis van leeftijd (`if/else`)

Vraag of definieer een variabele `leeftijd` (bijvoorbeeld `17`). Controleer met een `if / else if / else`-structuur:
* Onder de 16 jaar: druk af `"Geen toegang."`
* Tussen 16 en 17 jaar (inclusief): druk af `"Toegang onder begeleiding."`
* 18 jaar of ouder: druk af `"Volledige toegang."`

### Oefening 2: Temperatuurwaarschuwing (`if/else`)

Gegeven een array met gemeten temperaturen in een serverruimte: `[19, 22, 26, 21, 29, 18]`.
Doorloop de array met een `for`-lus. Als de temperatuur `25` graden of hoger is, druk je af: `"WAARSCHUWING: Hoge temperatuur (X°C)"`. In alle andere gevallen druk je af: `"Temperatuur normaal (X°C)"`.

### Oefening 3: Positieve en negatieve getallen scheiden (`for` + `if/else`)

Gegeven een array: `[12, -5, 8, -3, 0, 19, -11]`.
Gebruik een `for`-lus om alle strikt positieve getallen in een nieuwe array `positief` te plaatsen, en alle strikt negatieve getallen in een array `negatief` (negeer het getal `0`). Druk beide arrays achteraf af.

---

## Niveau 2: `while` en `do...while` lussen

### Oefening 4: Sparen voor een laptop

Je wilt een nieuwe laptop kopen van `€1200`. Je hebt momenteel `€250` spaargeld en legt elke maand `€150` opzij.
Gebruik een `while`-lus om te berekenen hoeveel maanden je moet sparen tot je minstens `€1200` hebt. Druk na de lus het aantal maanden en je uiteindelijke spaarsaldo af.

### Oefening 5: Dobbelsteen gooien tot een 6

Simuleer het gooien van een zeszijdige dobbelsteen met `Math.floor(Math.random() * 6) + 1`.
Gebruik een `do...while`-lus om te blijven gooien totdat je een `6` gooit. Druk bij elke worp het gegooide getal af en toon op het einde hoeveel pogingen je nodig had.

### Oefening 6: Pincode blokkeren na 3 pogingen

Gegeven een lijst met ingevoerde pincodes: `["1111", "2222", "3333", "4567"]` en de juiste pincode `"4567"`.
Gebruik een `while`-lus om de pogingen te controleren.
* Zodra de juiste code is ingevoerd, druk je `"Toegang verleend"` af en stop je de lus.
* Na 3 foute pogingen druk je `"Kaart geblokkeerd!"` af en stop je de lus (de 4e poging wordt dus niet meer gecontroleerd).

### Oefening 7: Som van invoer tot 0

Gegeven een array met gesimuleerde gebruikersinvoer: `[15, 20, 5, 0, 100, 50]`.
Gebruik een `do...while`-lus om de getallen één voor één op te tellen bij een totaal, totdat het getal `0` wordt tegengekomen. Druk het uiteindelijke totaal af (`40`).

---

## Niveau 3: Gecombineerde uitdagingen

### Oefening 8: Kortingscode berekenen (`for` + `if/else if/else`)

Gegeven een winkelmandje met prijzen: `[120, 45, 210, 15, 85]`.
Doorloop het mandje met een `for`-lus en pas per artikel de juiste korting toe:
* Prijs vanaf `€200`: 20% korting.
* Prijs vanaf `€100` (en onder `€200`): 10% korting.
* Prijs onder `€100`: geen korting.
Bereken de totaalprijs van alle artikelen samen nadat de kortingen zijn verrekend.

### Oefening 9: Batterij-ontlading simuleren (`while` + `if/else`)

Een toestel start met `100%` batterij. Gegeven een array met verbruik per uur: `[15, 20, 30, 25, 15, 10]`.
Gebruik een `while`-lus om het batterijpercentage per uur te verlagen zolang er nog batterij over is (`> 0`) en er nog uren in de array staan.
* Zakt de batterij op of onder `20%` (maar is ze nog niet leeg), druk dan een waarschuwing af: `"Batterij bijna leeg: X%"`.
* Als het verbruik groter is dan het resterende percentage, zet je de batterij op `0%`, druk je `"Toestel uitgeschakeld"` af en stopt de lus.

### Oefening 10: Menu-navigatie simuleren (`do...while` + `if/else`)

Simuleer een keuzemenu met een array van gekozen menu-opties: `[1, 2, 5, 3]`.
Gebruik een `do...while`-lus om de keuzes te verwerken totdat optie `3` (Afsluiten) wordt gekozen:
* Keuze `1`: druk af `"Bestand geopend."`
* Keuze `2`: druk af `"Bestand opgeslagen."`
* Keuze `3`: druk af `"Programma wordt afgesloten..."`
* Elke andere keuze: druk af `"Ongeldige keuze, probeer opnieuw."`