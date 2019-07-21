import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesiVenueComponent } from './mesi-venue.component';

describe('MesiVenueComponent', () => {
  let component: MesiVenueComponent;
  let fixture: ComponentFixture<MesiVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesiVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesiVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
