import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { PlantsService } from '../../services/firebase/plants.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
    console.log("config")
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
  }

}
