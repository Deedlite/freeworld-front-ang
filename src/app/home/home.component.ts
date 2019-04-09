import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Place } from '../model/place';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
places :Array<Place> = [];
  constructor(private placesService: PlacesService) {
    this.placesService.getAllPlace().subscribe(response => this.places = response);
  }

  ngOnInit() {}

}
