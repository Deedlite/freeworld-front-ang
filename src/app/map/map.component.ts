import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer, Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {

  options;
  option = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  userLat :number;
  userLon :number;

  constructor() {
  }

  ngOnInit() {
    if(window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition( response => {
        this.success(response.coords);
      },
      error => {
        this.error(error);
      }, this.option);
    }
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        })
      ],
      zoom: 7,
      center: latLng([ this.userLat, this.userLon ])
    };
  }

  success(pos) {
    this.userLat = pos.latitude;
    this.userLon = pos.longitude;
    console.log("latitude :" + this.userLat + " and longitude: " + this.userLon);
  }

  error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }

}
