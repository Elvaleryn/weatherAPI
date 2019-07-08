class Weather {
    constructor(city, country) {
        this.apiKey = "35e9f74e0c4f437861adc93f8f8510fb";
        this.city = city;
        this.country = country;
    }


    //Fetch Weather API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }
    // Change Weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}