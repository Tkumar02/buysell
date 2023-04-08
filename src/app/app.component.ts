import { Component, OnDestroy, OnInit } from '@angular/core';
import { Listing } from './types';
import { APIService } from './API.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: ZenObservable.Subscription | null = null;
  title = 'buysell';
  listing2s!: Listing[];

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListListing2s().then((event)=>{
      this.listing2s = event.items as Listing[];
    });

    this.subscription = this.api.OnCreateListing2Listener().subscribe(
      (event: any) => {
        const newListing2 = event.value.data.onCreateListing2;
        this.listing2s = [newListing2, ...this.listing2s];
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

}
