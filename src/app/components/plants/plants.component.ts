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
          this.plants.push(new Plant((data[i].payload.doc.data() as Plant).plant_id,
            new Date((data[i].payload.doc.data() as Plant).start_time),
            (data[i].payload.doc.data() as Plant).page,
            (data[i].payload.doc.data() as Plant).owner_id,
            (data[i].payload.doc.data() as Plant).id))
        }

        this.plants = this.plants.filter((element) => {           
          let now = new Date();
          if((now.getHours()*60 + now.getMinutes()) > (element.start_time.getHours()*60 + element.start_time.getMinutes() + 15) || (now.getHours()*60 + now.getMinutes()) < (element.start_time.getHours()*60 + element.start_time.getMinutes() - 15))
            return false
          return true;
        })

        this.plants = this.plants.sort((a, b) => {
          if(a.start_time.getHours() > b.start_time.getHours()){
            return 1;
          } else if (a.start_time.getHours() < b.start_time.getHours()){
            return -1;
          }
          if(a.start_time.getMinutes() > b.start_time.getMinutes()){
            return 1;
          } else if (a.start_time.getMinutes() < b.start_time.getMinutes()){
            return -1;
          }
          if(a.start_time.getSeconds() > b.start_time.getSeconds()){
            return 1;
          } else if (a.start_time.getSeconds() < b.start_time.getSeconds()){
            return -1;
          }
          return 1;
        });
      })
   }

  public goToFarm(url: string){
    window.open("https://marketplace.plantvsundead.com/farm#/farm/other/" + url, "_blank");
  }

  public goToPlant(url: string){
    window.open("https://marketplace.plantvsundead.com/farm#/farm/" + url, "_blank");
  }
}
