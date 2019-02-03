import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/app-model';
import { firebaseService } from '../firebaseService'

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  itemName: string;
  itemDescription: string;
  location: string;
  email: string;
  phoneNumber: string
  foundItem: item;

  constructor(private firebaseInstance: firebaseService) { }

  ngOnInit() {
    console.log(this.itemName);
    console.log(this.itemDescription);
  }


  addDataToDb() {
    if (this.itemName && this.itemDescription) {
      let email = (!this.email) ? "no email provided" : this.email;
      let phoneNumber = (!this.phoneNumber) ? "no phone number provided" : this.phoneNumber;
      this.foundItem = {
        item: this.itemName,
        description: this.itemDescription,
        email: email,
        phone: phoneNumber,
        location: this.location,
      }
      console.log(this.foundItem);
      this.firebaseInstance.addDataToFirebase(this.foundItem);
    }
  }






}
