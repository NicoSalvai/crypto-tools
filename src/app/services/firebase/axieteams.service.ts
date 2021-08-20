import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AxieTeam, AxieType, AxieCard } from 'src/app/models/axies';


@Injectable({
  providedIn: 'root'
})
export class AxieteamsService {

  constructor(private firestore: AngularFirestore) { }

  public getAxieTeams(){
    return this.firestore.collection('axieteams').snapshotChanges();
  }

  public getAxieTeamsByOwner(owner: string){
    return this.firestore.collection('axieteams', ref => ref.where('owner','==', owner)).valueChanges();

  }

  public updateAxieTeam(documentId: string, data: AxieTeam) {
    return this.firestore.collection('axieteams').doc(documentId).set(data);
  }

  public getAxieTeam(documentId: string) {
    return this.firestore.collection('axieteams').doc(documentId).snapshotChanges();
  }

  public createAxieTeam(data: AxieTeam) {
    let object_data = {
      name: data.name,
      owner: data.owner,
      team: [
        {
          axie_type: {
            type_id: data.team[0].axie_type.type_id,
            label: data.team[0].axie_type.label,
            value: data.team[0].axie_type.value,
          },
          horn: JSON.stringify(data.team[0].horn),
          mouth: JSON.stringify(data.team[0].mouth),
          back: JSON.stringify(data.team[0].back),
          tail: JSON.stringify(data.team[0].tail),
        },
        {
          axie_type: JSON.stringify(data.team[1].axie_type),
          horn: JSON.stringify(data.team[1].horn),
          mouth: JSON.stringify(data.team[1].mouth),
          back: JSON.stringify(data.team[1].back),
          tail: JSON.stringify(data.team[1].tail),
        },
        {
          axie_type: JSON.stringify(data.team[2].axie_type),
          horn: JSON.stringify(data.team[2].horn),
          mouth: JSON.stringify(data.team[2].mouth),
          back: JSON.stringify(data.team[2].back),
          tail: JSON.stringify(data.team[2].tail),
        }
      ]
    }
    return this.firestore.collection('axieteams').add(JSON.parse(JSON.stringify(data)));
  }

}
