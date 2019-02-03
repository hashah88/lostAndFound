import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/app-model';


@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {
  
  itemName : string;
  itemDescription : string;
  location : string;
  email : string;
  phoneNumber : string

  constructor() { }

  ngOnInit() {
    console.log(this.itemName);
    console.log(this.itemDescription);
  }


  addDataToDb() {
    if (this.itemName && this.itemDescription) {
      let email = (!this.email)? "no email provided" :this.email ;
      let phoneNumber = (!this.phoneNumber)?  "no phone number provided": this.phoneNumber ;
      var foundItem = new item(this.itemName, this.itemDescription, this.location, email, phoneNumber);
     console.log(foundItem);
      // add this object to the database in the service
    }
  }



   
  

}
