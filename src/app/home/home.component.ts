import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Place } from '../model/place';

//test openstreemap
declare var ol: any;
// fin test openstreemap

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  places :Array<Place> = [];
  name :string;
  address :string;
  city :string;

  // test openstreetmap
  latitude: number = 42.7027800;
  longitude: number = 9.4500000;
  map : any;
  // fin test openstreemap

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    // test openstreetmap
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([9.4500000, 42.7027800]),
        zoom: 8
      })
    });
    // fin test openstreetmap
    
    this.placesService.getAllPlace().subscribe(response => this.places = response);
  }

  sendPlace = () => {
    let place :Place = {
      name: this.name,
      address: this.address,
      city: this.city
    }
    this.placesService.sendPlaces(place).subscribe(() => {
      this.placesService.getAllPlace().subscribe(response => this.places = response);
      this.name = "";
      this.address = "";
      this.city = "";
    });
  }
}
