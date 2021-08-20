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
    this.plantsService.getPlantsFilterBy(new Date().getHours(), new Date().getMinutes())
      .subscribe((data) => {
        for(let i = 0; i < data.length; i++){
          this.plants.push(data[i] as Plant)
        }

        this.plants = this.plants.sort((a, b) => {
          if(a.hour > b.hour){
            return 1;
          } else if (a.hour < b.hour){
            return -1;
          }
          if(a.minute > b.minute){
            return 1;
          } else if (a.minute < b.minute){
            return -1;
          }
          if(a.second > b.second){
            return 1;
          } else if (a.second < b.second){
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
