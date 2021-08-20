import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AxieCard } from 'src/app/models/axie-card';

@Injectable({
  providedIn: 'root'
})
export class AxieCardService {

  constructor(private firestore: AngularFirestore) { }

  public getAxieCards(){
    return this.firestore.collection('axiecards').snapshotChanges();
  }

  public getAxieCardsByPart(part: string){
    return this.firestore.collection('axiecards', ref => ref.where('part','==', part)).valueChanges();

  }

  public updateAxieCard(documentId: string, data: AxieCard) {
    return this.firestore.collection('axiecards').doc(documentId).set(data);
  }

  public getAxieCard(documentId: string) {
    return this.firestore.collection('axiecards').doc(documentId).snapshotChanges();
  }

  public createAxieCard(data: AxieCard, id: string) {
    return this.firestore.collection('axiecards').doc(id).set(data);
  }

}
