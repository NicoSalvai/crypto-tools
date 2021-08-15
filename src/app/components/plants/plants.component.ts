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
    let aux_plants: Plant[] = [];
    this.plantsService.getPlants()
      .subscribe((data) => {
        for(let i = 0; i < data.length; i++){
          this.plants.push(new Plant((data[i].payload.doc.data() as Plant).plant_id,
            (data[i].payload.doc.data() as Plant).start_time,
            (data[i].payload.doc.data() as Plant).page,
            (data[i].payload.doc.data() as Plant).owner_id,
            (data[i].payload.doc.data() as Plant).id))
        }

        this.plants = this.plants.sort((a, b) => {
          if(parseInt(a.start_time.substring(11,13)) > parseInt(b.start_time.substring(11,13))){
            return 1;
          } else if (parseInt(a.start_time.substring(11,13)) < parseInt(b.start_time.substring(11,13))){
            return -1;
          }
          if(parseInt(a.start_time.substring(14,16)) > parseInt(b.start_time.substring(14,16))){
            return 1;
          } else if (parseInt(a.start_time.substring(14,16)) < parseInt(b.start_time.substring(14,16))){
            return -1;
          }
          if(parseInt(a.start_time.substring(17,19)) > parseInt(b.start_time.substring(17,19))){
            return 1;
          } else if (parseInt(a.start_time.substring(17,19)) < parseInt(b.start_time.substring(17,19))){
            return -1;
          }
          return 1;
        });
      })
    console.log(this.plants.length)
    console.log(this.plants)
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
