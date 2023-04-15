import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
//import { fakeListings } from '../fake-data';
import { Listing2, APIService } from '../API.service';
@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  //listings: Listing[] = [];
  public listings2: Array<Listing2> = [];

  constructor (private api: APIService) { }

  // ngOnInit(): void {
  //   this.listings = fakeListings;
  // }

  async ngOnInit() {
    this.api.ListListing2s().then((event)=> {
      this.listings2 = event.items as Listing2[];
    })
  }

}
