import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesiVenueFormComponent } from './mesi-venue-form.component';

describe('MesiVenueFormComponent', () => {
  let component: MesiVenueFormComponent;
  let fixture: ComponentFixture<MesiVenueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesiVenueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesiVenueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
