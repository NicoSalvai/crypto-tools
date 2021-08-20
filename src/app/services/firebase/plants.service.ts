import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plant } from '../../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private firestore: AngularFirestore) { }

  public getPlants(){
    return this.firestore.collection('plants').snapshotChanges();
  }

  public getPlantsFilterBy(hour: number, minute: number){
    return this.firestore.collection('plants', ref => ref.where('hour','==', hour)).valueChanges();
  }

  public updatePlant(documentId: string, data: Plant) {
    return this.firestore.collection('plants').doc(documentId).set(data);
  }

  public getPlant(documentId: string) {
    return this.firestore.collection('plants').doc(documentId).snapshotChanges();
  }

  public createPlant(data: any, plant_id: string) {
    
    console.log(data, plant_id)
    return this.firestore.collection('plants').doc(plant_id).set(data);
  }
}
