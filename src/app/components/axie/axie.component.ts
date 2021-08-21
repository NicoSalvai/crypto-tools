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

  axieTeams: AxieTeam[] = [];
  currentAxieTeam: AxieTeam = new AxieTeam("","",[]);

  axieHornCards: AxieCard[] = [];
  axieMouthCards: AxieCard[] = [];
  axieBackCards: AxieCard[] = [];
  axieTailCards: AxieCard[] = [];

  createAxieTeam: boolean = false;
  play: boolean = false;
  playing: boolean = false;

  currentDeck: any[] = [];
  currentEnergy: number = 3;

  axieTypes: AxieType[] = [new AxieType("1","Aquatic","aquatic"),
        new AxieType("2","Beast","beast"),
        new AxieType("3","Bird","bird"),
        new AxieType("4","Bug","bug"),
        new AxieType("5","Plant","plant"),
        new AxieType("6","Reptile","reptile"),
        new AxieType("7","Mech","mech"),
        new AxieType("8","Dawn","dawn"),
        new AxieType("9","Dusk","dusk")]


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
    axie_team.team.push(new Axie(this.axieTypes[this.axieForm.controls.axieTypeTwo.value], 
            this.axieHornCards[this.axieForm.controls.axieHornTwo.value], 
            this.axieMouthCards[this.axieForm.controls.axieMouthTwo.value], 
            this.axieBackCards[this.axieForm.controls.axieBackTwo.value], 
            this.axieTailCards[this.axieForm.controls.axieTailTwo.value]))
    axie_team.team.push(new Axie(this.axieTypes[this.axieForm.controls.axieTypeThree.value], 
            this.axieHornCards[this.axieForm.controls.axieHornThree.value], 
            this.axieMouthCards[this.axieForm.controls.axieMouthThree.value], 
            this.axieBackCards[this.axieForm.controls.axieBackThree.value], 
            this.axieTailCards[this.axieForm.controls.axieTailThree.value]))
    console.log(axie_team);
    this.axieteamsService.createAxieTeam(axie_team);
    this.axieForm.reset();
  }


  public createAxieTeamMode(){
    if(this.axieBackCards.length == 0){
      this.loadAxieParts()
    }
    this.play = false;
    this.playing = false;
    this.createAxieTeam = true;
  }

  public playTeamMode(){
    this.createAxieTeam = false;
    this.playing = false;
    this.play = true;
    this.axieForm.reset();
  }

  public loadTeams(team_key: string){
    this.axieteamsService.getAxieTeamsByOwner(team_key).subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieTeams.push(data[i] as AxieTeam);
      }
    })
  }

  public chooseTeam(team_name: any){
    this.currentAxieTeam = this.axieTeams.filter(team => team.name == team_name)[0];
    this.createAxieTeam = false;
    this.play = false;
    this.playing = true;
    this.loadDeck()
  }

  public loadDeck(){
    this.currentAxieTeam.team.forEach(axie => {
      this.currentDeck.push({ alive: true, deck:
        [{card: axie.horn, left: 2}, 
        {card: axie.mouth, left: 2}, 
        {card: axie.back, left: 2}, 
        {card: axie.tail, left: 2}]})
    });
  }

  public clickOnCard(card:any){
    if(card.left == 0){
      card.left = 2;
    } else {
      card.left--;
    }
  }

  public changeEnergy(value: number){
    this.currentEnergy += value;
  }

  public resetFight(){
    this.currentEnergy = 3;
    this.currentDeck.forEach(subDeck => {
      subDeck.alive = true;
      subDeck.deck.forEach((card: any) => {
        card.left = 2;
      });
    });
  }

  public resetDeck(){
    this.currentDeck.forEach(subDeck => {
      if(subDeck.alive){
        subDeck.deck.forEach((card: any) => {
          card.left = 2;
        });
      }
    });
  }

  public killDeck(deck: any){
    if(deck.alive)
      deck.alive = false;
    else
      deck.alive = true;
  }

  public loadAxieParts(){
    this.axieCardService.getAxieCardsByPart("Back").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieBackCards.push(data[i] as AxieCard);
      }
      this.axieBackCards = this.axieBackCards.sort((a,b) => {
        return a.skillName.localeCompare(b.skillName);
      })
    });
    this.axieCardService.getAxieCardsByPart("Horn").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieHornCards.push(data[i] as AxieCard);
      }
      this.axieHornCards = this.axieHornCards.sort((a,b) => {
        return a.skillName.localeCompare(b.skillName);
      })
    });
    this.axieCardService.getAxieCardsByPart("Mouth").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieMouthCards.push(data[i] as AxieCard);
      }
      this.axieMouthCards = this.axieMouthCards.sort((a,b) => {
        return a.skillName.localeCompare(b.skillName);
      })
    });
    this.axieCardService.getAxieCardsByPart("Tail").subscribe((data) => {
      for(let i = 0; i < data.length; i++){
        this.axieTailCards.push(data[i] as AxieCard);
      }
      this.axieTailCards = this.axieTailCards.sort((a,b) => {
        return a.skillName.localeCompare(b.skillName);
      })
    });
  }
}