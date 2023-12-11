import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {
  photo: string | undefined;
  currentCity: string | undefined;
  currentContinent: string | undefined;
  currentCountry: string | undefined;
  countryCode:string | undefined;
  countyCode: string | undefined;
  latitud: any;
  longitud: any;
  constructor() { }

  ngOnInit() {
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
  
      this.photo = image.webPath;
    } catch (error) {
      console.error('Error taking photo', error);
    }
  }

  async showCurrentCity() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.reverseGeocode(coordinates.coords.latitude, coordinates.coords.longitude);
    } catch (e) {
      console.error('Error getting location', e);
    }
  }

  async reverseGeocode(latitude: number, longitude: number) {
    // Use a reverse geocoding API to convert coordinates to a city name
    // Example: Using the OpenCage Data API (you need to get an API key)
    const apiKey = '587c58de5e054be7bb54fbf3693ce75f';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.latitud = latitude;
        this.longitud = longitude;
        if (data && data.results && data.results.length > 0) {
          const city = data.results[0].components.city || data.results[0].components.town;
          console.log(data.results[0]);
          console.log(`Current city: ${city}`);
          this.currentCity = city;
          this.currentContinent = data.results[0].components.continent;
          this.currentCountry = data.results[0].components.country;
          this.countryCode = data.results[0].components.country_code;
          this.countyCode = data.results[0].components.county;
        }
      })
      .catch(error => {
        console.error('Error in reverse geocoding', error);
      });
  }

}
