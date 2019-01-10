export class UI {
    constructor(){
        this.lugar = document.getElementById('clima-location');
        this.desc = document.getElementById('clima-descripcion');
        this.grado = document.getElementById('clima-string');
        this.humedad = document.getElementById('clima-humedad');
        this.viento = document.getElementById('clima-viento');
    }

    desplegar(clima) {
        String.prototype.cap = function(){
            let str = this;
        
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        };

        this.lugar.textContent = clima.name + ' / ' + clima.sys.country;
        this.desc.textContent = clima.weather[0].description.cap();
        this.grado.textContent = clima.main.temp + ' ℃';
        this.humedad.textContent = 'Humidity: ' + clima.main.humidity + ' %';
        this.viento.textContent = 'Wind: ' + clima.wind.speed + ' m/s'
    }
}