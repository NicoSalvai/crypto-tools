import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { PlantsService } from '../../services/firebase/plants.service';
import { AxieCardService } from '../../services/firebase/axiecard.service';
import { AxieCard } from 'src/app/models/axie-card';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private plantsService: PlantsService, private axieCardService: AxieCardService) { }

  ngOnInit(): void {
  }


  public addJsonPlants(jsonInputPlants: any) {
    var data = JSON.parse(jsonInputPlants);
    var page = 0;
    for(var i = 0; i < data.data.length; i++){
      this.plantsService.createPlant(
        {
         plant_id: data.data[i].plantId, 
         hour: parseInt(data.data[i].startTime.split("T")[1].split(":")[0]), 
         minute: parseInt(data.data[i].startTime.split("T")[1].split(":")[1]), 
         second: parseInt(data.data[i].startTime.split("T")[1].split(":")[2].split(".")[0]), 
         page: page, 
         owner_id: data.data[i].ownerId,
         id: data.data[i]._id
        }, 
         data.data[i].plantId.toString())
    }
  }

  public addJsonAxie(jsonInputAxie: any) {
    var data = JSON.parse(jsonInputAxie);
    var page = 0;
    for (const id in data) {
      if (data.hasOwnProperty(id)) {
        console.log(data[id] as AxieCard)
        this.axieCardService.createAxieCard(data[id],data[id].id)
      }
    }
  }

}
