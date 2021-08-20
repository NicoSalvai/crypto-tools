import { Component, OnInit } from '@angular/core';
import { AxieCard } from 'src/app/models/axie-card';
import { AxieType } from 'src/app/models/axie-type';
import { AxieCardService } from '../../services/firebase/axiecard.service';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-axie',
  templateUrl: './axie.component.html',
  styleUrls: ['./axie.component.css']
})
export class AxieComponent implements OnInit {

  axieHornCards: AxieCard[] = [];
  axieMouthCards: AxieCard[] = [];
  axieBackCards: AxieCard[] = [];
  axieTailCards: AxieCard[] = [];

  createAxieTeam: boolean = false;

  axieTypes: AxieType[] = [new AxieType("1","Aquatic","aquatic"),
        new AxieType("1","Beast","beast"),
        new AxieType("1","Bird","bird"),
        new AxieType("1","Bug","bug"),
        new AxieType("1","Plant","plant"),
        new AxieType("1","Reptile","reptile"),
        new AxieType("1","Mech","mech"),
        new AxieType("1","Dawn","dawn"),
        new AxieType("1","Dusk","dusk")]


  axieForm = new FormGroup({
    "axieTypeOne": new FormControl("", Validators.required),
    "axieHornOne": new FormControl("", Validators.required),
    "axieMouthOne": new FormControl("", Validators.required),
    "axieBackOne": new FormControl("", Validators.required),
    "axieTailOne": new FormControl("", Validators.required),
    "axieTypeTwo": new FormControl("", Validators.required),
    "axieHornTwo": new FormControl("", Validators.required),
    "axieMouthTwo": new FormControl("", Validators.required),
    "axieBackTwo": new FormControl("", Validators.required),
    "axieTailTwo": new FormControl("", Validators.required),
    "axieTypeThree": new FormControl("", Validators.required),
    "axieHornThree": new FormControl("", Validators.required),
    "axieMouthThree": new FormControl("", Validators.required),
    "axieBackThree": new FormControl("", Validators.required),
    "axieTailThree": new FormControl("", Validators.required)
});
  constructor(private axieCardService: AxieCardService) { }

  ngOnInit(): void {
  }

  public onSubmitAxieForm(){
    console.log("submitedAxieForm" + this.axieForm)
  }

  public loadAxieParts(){
    this.axieCardService.getAxieCardsByPart("Back").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieBackCards.push(data[i] as AxieCard);
      }
    });
    this.axieCardService.getAxieCardsByPart("Horn").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieHornCards.push(data[i] as AxieCard);
      }
    });
    this.axieCardService.getAxieCardsByPart("Mouth").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieMouthCards.push(data[i] as AxieCard);
      }
    });
    this.axieCardService.getAxieCardsByPart("Tail").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieTailCards.push(data[i] as AxieCard);
      }
    });
  }
}