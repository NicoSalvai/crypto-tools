import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-index',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  data: any;

  plants: Plant[] = [];

  constructor() { }

  ngOnInit(): void {  }

  public addJson(jsonInput: any) {
    var data = JSON.parse(jsonInput);
    var page = 0;
    for(var i = 0; i < data.data.length; i++){
      this.plants.push(new Plant(data.data[i].plantId, data.data[i].startTime, page, data.data[i].ownerId))
    }
    console.log(this.plants)
    this.plants = this.plants.sort((a, b) => {
      return <any>new Date(a.start_time) - <any>new Date(b.start_time);
    });
  }

  public goToLink(url: string){
    window.open("https://marketplace.plantvsundead.com/farm#/farm/other/" + url, "_blank");
  }
}
