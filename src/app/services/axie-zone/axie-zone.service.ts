import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AxieZoneService {

  url : string  = "https://axie.zone";
  cards_path : string = "/func/proxy_axiecards.php";

  //constructor(private http: HttpClient) { }
  constructor() { }

  public getAxieCards() : any[]{
    /*var aux : any[] = [];
    this.http.get(this.url + this.cards_path)
      .subscribe((data: any) => {
        aux = data
        console.log(data)
        console.log(aux)
      })
    return aux;
  }*/
  return [];
  }
}
