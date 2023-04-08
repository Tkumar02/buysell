import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listings2Component } from './listings2.component';

describe('Listings2Component', () => {
  let component: Listings2Component;
  let fixture: ComponentFixture<Listings2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listings2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
