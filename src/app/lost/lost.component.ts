import { Component, OnInit } from '@angular/core';
import * as algoliasearch from 'algoliasearch';



@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {
  index: any;
  client: any;

    // algoliaConfig = {
    //   apiKey: '06b8bfc492b6757949b4220017d8693d',
    //   appId: 'K5MHKFSXEU',
    //   indexName: 'lostAndFoundData',
    //   routing: true,
    // };

    

    txtVal : string
    query : string;
    results = ["hey"];
    showResults = false;
  constructor() {
    this.client = algoliasearch('K5MHKFSXEU', '06b8bfc492b6757949b4220017d8693d');
  this.index = this.client.initIndex('lostAndFoundData');
   }

  ngOnInit() {
  }

  searchChanged(query) {
    if (query.length) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }

  searchThisQuery(query : string) {
    console.log("")
    console.log(query);
    this.index.search({
      query: query
    },
    function searchDone(err, content) {
      if (err) throw err;
  
      console.log(content.hits);
      console.log(content.hits[0]["description"]);
      this.results = content.hits;
    }.bind(this)
  );
  }

}


