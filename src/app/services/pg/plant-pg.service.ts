import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlantPgService {

  configUrl: String = 'http://192.168.0.166:8080/api';
  

  constructor(private http: HttpClient) { }

  public getPlants(){
    return this.http.get(this.configUrl.concat('/plants'));
    
  }
}
