import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

   

    algoliaConfig = {
      apiKey: '06b8bfc492b6757949b4220017d8693d',
      appId: 'K5MHKFSXEU',
      indexName: 'bestbuy'
    };

  constructor() { }

  ngOnInit() {
  }

}


