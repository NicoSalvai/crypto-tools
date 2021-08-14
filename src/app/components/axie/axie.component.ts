import { Component, OnInit } from '@angular/core';
import { AxieZoneService } from 'src/app/services/axie-zone/axie-zone.service';

@Component({
  selector: 'app-axie',
  templateUrl: './axie.component.html',
  styleUrls: ['./axie.component.css']
})
export class AxieComponent implements OnInit {

  axieCards: any[] = [];

  constructor(private axieZoneService: AxieZoneService) { }
  //constructor() { }

  ngOnInit(): void {
    //this.axieZoneService.getAxieCards();
  }



}
