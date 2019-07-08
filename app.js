//Init Storage
const storage = new Storage();

//Get Location Data
const weatherLocation = storage.getLocationData();

//Init weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init ui class
const ui = new UI();

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;

    weather.changeLocation(city, country);

    storage.setLocationData(city, country);

    //Get and Display Weather
    getWeather();

    //Close Modal
    $("#locModal").modal("hide");

});

//weather.changeLocation
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
    }