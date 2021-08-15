import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { PlantsService } from '../../services/firebase/plants.service';




@Component({
  selector: 'app-index',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  data: any;

  plants: Plant[] = [];

  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void { 
    this.plantsService.getPlants()
      .subscribe((data) => {
        for(let i = 0; i < data.length; i++){
          this.plants.push(data[i].payload.doc.data() as Plant)
        }
      })
      this.plants.sort((a, b) => {
        return <any>new Date(a.start_time) - <any>new Date(b.start_time);
      });
   }

  public addJson(jsonInput: any) {
    var data = JSON.parse(jsonInput);
    var page = 0;
    for(var i = 0; i < data.data.length; i++){
      this.plantsService.createPlant(
        {
         plant_id: data.data[i].plantId, 
         start_time: data.data[i].startTime, 
         page: page, 
         owner_id: data.data[i].ownerId,
         id: data.data[i]._id
        }, 
         data.data[i].plantId.toString())
    }
    console.log(this.plants)
    
  }

  public goToFarm(url: string){
    window.open("https://marketplace.plantvsundead.com/farm#/farm/other/" + url, "_blank");
  }

  public goToPlant(url: string){
    window.open("https://marketplace.plantvsundead.com/farm#/farm/" + url, "_blank");
  }
}
