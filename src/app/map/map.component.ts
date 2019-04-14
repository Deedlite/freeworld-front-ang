import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer, Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {

  options;
  layers;
  lat :number;
  lon :number;

  constructor() {
  }

  ngOnInit() {
    this.initCoords();
  }

  initCoords() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lon);
        }
        this.options = {
          layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            })
          ],
          zoom: 7,
          center: latLng([ this.lat, this.lon ]),
        };

        this.layers = [
            marker([ this.lat, this.lon ])
        ];

      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
