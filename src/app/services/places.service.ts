import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Place } from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url :string = "http://localhost:3000";

  constructor( private http:HttpClient) {}

    sendPlaces = (item :Place) => this.http.post(this.url + "/place", item);
    getAllPlace = () => this.http.get<Array<Place>>(this.url + "/place");
}
