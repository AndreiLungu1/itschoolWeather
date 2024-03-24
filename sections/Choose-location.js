const bucharestButton = document.querySelector('.dropdown-menu li .bucharest');
const timisoaraButton = document.querySelector('.dropdown-menu li .timisoara');
const oradeaButton = document.querySelector('.dropdown-menu li .oradea');
const aradButton = document.querySelector('.dropdown-menu li .arad');
const sibiuButton = document.querySelector('.dropdown-menu li .sibiu');


// Declaram o functie care sa ne schimbe orasul curent 
function updateCurrentCity(city){
    // Mai intai trebuie sa selectez elementul care imi tine orasul curent 
    const currentCityElem = document.querySelector('.current-city');
    currentCityElem.innerHTML = city;

}


//Declaram o functie care ne va schimba orasul si ne va face update la vreme 
function updateWeather(city) {
    //Actualizam orasul selectat din drop-down in localStorage
    localStorage.setItem("city", city);
    //Reafisam vremea curenta in functie de orasul selectat
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    //Actualizam orasul afisat pe ecran - o sa ne ajutam de o alta functie: apelez functia updateCurrentCity
    updateCurrentCity(city);
}

//Adaugam event listeneri pe fiecare element in parte - adica pe fiecare buton din drop-down 
bucharestButton.addEventListener('click', function(){
    //La click pe button Bucuresti ar trebui sa schimb numele orasului 
    //Si al doilea lucru sa fac update la vreme
    updateWeather("București");
})
timisoaraButton.addEventListener('click', function(){
    //La click pe button Bucuresti ar trebui sa schimb numele orasului 
    //Si al doilea lucru sa fac update la vreme
    updateWeather("Timișoara");
})
oradeaButton.addEventListener('click', function(){
    //La click pe button Bucuresti ar trebui sa schimb numele orasului 
    //Si al doilea lucru sa fac update la vreme
    updateWeather("Oradea");

})
aradButton.addEventListener('click', function(){
    updateWeather("Arad");
})
sibiuButton.addEventListener('click', function() {
    updateWeather("Sibiu");
});