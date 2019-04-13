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

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
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
