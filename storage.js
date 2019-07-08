class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = "Kocaeli";
        this.defaultCountry = "Turkey";
    }

    getLocationData() {
        if(localStorage.getItem("city") === null) {
            this.city = this.defaultCity;

        }else {
            this.city = localStorage.getItem("city");
        }
        
        if(localStorage.getItem("country") === null) {
            this.city = this.defaultCountry;

        } else {
            this.city = localStorage.getItem("country");
        }

        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country) {
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
    }
}