import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheelmapService {
  apiKey = "soisHW5J5ytmFttvXY-C"
  headers = new HttpHeaders().set('access-control-allow-origin',"*");

  constructor( private http:HttpClient) {}

    getAllNodeAround = (lat, lon) => this.http.get("http://wheelmap.org/api/nodes?api_key=" + this.apiKey + "&bbox="+ (lat + 1) + ","+ (lon + 1) + ","+ (lat -1) + ","+(lon - 1) +"&per_page=10&wheelchair=yes");
}
