import { Component, OnInit } from '@angular/core';
import { AxieCard, AxieType, Axie, AxieTeam } from 'src/app/models/axies';
import { AxieCardService } from '../../services/firebase/axiecard.service';
import { AxieteamsService } from '../../services/firebase/axieteams.service';

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
    "name": new FormControl("", Validators.required),
    "owner": new FormControl("", Validators.required),
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
  constructor(private axieCardService: AxieCardService,
    private axieteamsService: AxieteamsService) { }

  ngOnInit(): void {
  }

  public onSubmitAxieForm(){
    let axie_team: AxieTeam = new AxieTeam(this.axieForm.controls.name.value,this.axieForm.controls.owner.value,[])
    axie_team.team.push(new Axie(this.axieTypes[this.axieForm.controls.axieTypeOne.value], 
            this.axieHornCards[this.axieForm.controls.axieHornOne.value], 
            this.axieMouthCards[this.axieForm.controls.axieMouthOne.value], 
            this.axieBackCards[this.axieForm.controls.axieBackOne.value], 
            this.axieTailCards[this.axieForm.controls.axieTailOne.value]))
    axie_team.team.push(new Axie(this.axieTypes[this.axieForm.controls.axieTypeOne.value], 
            this.axieHornCards[this.axieForm.controls.axieHornOne.value], 
            this.axieMouthCards[this.axieForm.controls.axieMouthOne.value], 
            this.axieBackCards[this.axieForm.controls.axieBackOne.value], 
            this.axieTailCards[this.axieForm.controls.axieTailOne.value]))
    axie_team.team.push(new Axie(this.axieTypes[this.axieForm.controls.axieTypeOne.value], 
            this.axieHornCards[this.axieForm.controls.axieHornOne.value], 
            this.axieMouthCards[this.axieForm.controls.axieMouthOne.value], 
            this.axieBackCards[this.axieForm.controls.axieBackOne.value], 
            this.axieTailCards[this.axieForm.controls.axieTailOne.value]))
    console.log(axie_team);
    this.axieteamsService.createAxieTeam(axie_team);
  }

  public loadAxieParts(){
    this.axieteamsService.getAxieTeams().subscribe((data) => {
      console.log(data);
    })
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