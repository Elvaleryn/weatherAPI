//Init weather Object
const weather = new Weather("london", "uk");

//Init ui class
const ui = new UI();

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//weather.changeLocation


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
    }