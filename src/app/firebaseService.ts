import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { item } from 'src/app/app-model';

@Injectable({
  providedIn: 'root'
})
export class firebaseService {
  private itemsCollection: AngularFirestoreCollection<item>;

  constructor(public db: AngularFirestore) { 
    this.itemsCollection = db.collection<item>('Items');
  }

  addDataToFirebase(foundItem : item){
    this.itemsCollection.add(foundItem);
  }
}
