import { Component, OnInit } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';
import { NgAisInstantSearch } from "angular-instantsearch";
// import algoliasearch from 'algoliasearch/lite';
// import instantsearch from 'instantsearch.js';
// import { searchBox, hits } from 'instantsearch.js/es/widgets';


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


