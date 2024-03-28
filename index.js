// Luam valorea cheii city din localStorage
let currentCityFromLs = localStorage.getItem("city");

// Pasul urmator este sa actualizam orasul afisat pe ecran daca avem cheia city in localStorage
const currentCityTag = document.querySelector(".current-city");
if(currentCityFromLs){
    currentCityTag.innerHTML = currentCityFromLs
}
if(currentCityFromLs) {
localStorage.setItem("city", "Bucharest");
    currentCityFromLs = "Bucharest";
}
//Afisam vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLs);

//Afisam vremea pe urmatoarele 5 zile
displayWeatherForecast(currentCityFromLs);
