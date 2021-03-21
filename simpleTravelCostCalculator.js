// Simple Travel Cost Calculator

let fogyasztas = parseFloat(prompt("Àtlag fogyasztás (liter/100km): "));
let üzemanyagar = parseInt(prompt("Üzemanyag ár (liter): "));
let tavolsag = parseInt(prompt("Megtenni kívánt úthossz (km): "));
let atlagsebesseg = parseInt(prompt("Àtlagsebesség (km/óra): "));


let üzemanyagköltseg = (tavolsag / fogyasztas) * üzemanyagar;
if (üzemanyagköltseg > 0) {
    console.log("Üzemanyag költsége: ",parseInt(üzemanyagköltseg),"HUF");
} else {
    console.log("Hibás adatbevitel!");
}

let utazasiidö = (tavolsag / atlagsebesseg * 60)
let pihenes = prompt("Szeretne pihenőt hozzáadni az utazáshoz? (igen/nem)")
if (pihenes == "i" || pihenes == "igen") {
    let pihenoszama = parseInt(prompt("Tervezett megállások száma : "));
    let pihenöidö = parseInt(prompt("Tervezett pihenők percben : "));
    console.log("Tervezett utazási idő, pihenővel:",
    parseInt(utazasiidö) + pihenoszama * pihenöidö, "perc",
    "Pihenőidő összesen: ",pihenoszama * pihenöidö ); "perc"
} else {
    console.log("Tervezett utazási idő, pihenő nélkül:", parseInt(utazasiidö), "perc");
}