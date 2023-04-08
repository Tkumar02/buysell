import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Listing2 } from '../API.service';

@Component({
  selector: 'app-listings2',
  templateUrl: './listings2.component.html',
  styleUrls: ['./listings2.component.css']
})
export class Listings2Component implements OnInit {
  public createForm: FormGroup;

  public listings2: Array<Listing2> = [];

  constructor(private api: APIService, private fb: FormBuilder){
    this.createForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required]
    });
  }

  async ngOnInit() {
    this.api.ListListing2s().then((event)=> {
      this.listings2 = event.items as Listing2[];
    })
  }

  public onCreate(listing2: Listing2) {
    this.api
      .CreateListing2(listing2)
      .then(()=>{
        console.log('Listing Created!');
        this.createForm?.reset();
      })
      .catch((e)=>{
        console.log('error creating listing...',e)
      })
  }
}
