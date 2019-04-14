import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer, Map } from 'leaflet';
import { WheelmapService } from '../services/wheelmap.service';

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

  constructor(private wheelmapService: WheelmapService) {
  }

  ngOnInit() {
    this.initCoords();
  }

  initCoords() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
        }
        this.options = {
          layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            })
          ],
          zoom: 12,
          center: latLng([ this.lat, this.lon ]),
        };

        this.layers = [
            marker([ this.lat, this.lon ])
        ];
        this.wheelmapService.getAllNodeAround(this.lat, this.lon).subscribe(response => {
            console.log(response)
          })
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
