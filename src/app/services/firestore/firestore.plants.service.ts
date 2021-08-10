import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plant } from '../../models/plant'


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  public createPlant(plant: Plant) {
    return this.firestore.collection('plants').add(plant);
  }
  
  public getPlant(plantId: string) {
    return this.firestore.collection('plants').doc(plantId).snapshotChanges();
  }

  public getPlants() {
    return this.firestore.collection('plants').snapshotChanges();
  }

  public updatePlant(plantId: string, plant: any) {
    return this.firestore.collection('plants').doc(plantId).set(plant);
  }
}
