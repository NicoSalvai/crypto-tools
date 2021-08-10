import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant'
import { FirestoreService } from 'src/app/services/firestore/firestore.plants.service';


@Component({
  selector: 'app-index',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  data: any;

  plants: Plant[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    console.log("init")
    this.firestoreService.getPlants().subscribe((plantsSnapshot) => {
      this.plants = [];
      plantsSnapshot.forEach((plantData: any) => {
        console.log(plantData)
        let plant = new Plant(plantData.payload.doc.plantId, plantData.payload.doc.startTime, plantData.payload.doc.page, plantData.payload.doc.ownerId)
        console.log(plant)
        this.plants.push(plant);
      })
    });

  }

  public addJson(jsonInput: any) {
    var data = JSON.parse(jsonInput);
    var page = 0;
    for(var i = 0; i < data.data.length; i++){
      this.plants.push(new Plant(data.data[i].plantId, data.data[i].startTime, page, data.data[i].ownerId))
    }
    console.log(this.plants)
    this.plants = this.plants.sort((a, b) => {
      return <any>new Date(a.startTime) - <any>new Date(b.startTime);
    });

  }

  public goToLink(url: string){
    window.open("https://marketplace.plantvsundead.com/farm/other/" + url, "_blank");
  }
}
