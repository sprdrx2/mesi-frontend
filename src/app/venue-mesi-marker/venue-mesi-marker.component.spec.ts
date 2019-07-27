import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueMesiMarkerComponent } from './venue-mesi-marker.component';

describe('VenueMesiMarkerComponent', () => {
  let component: VenueMesiMarkerComponent;
  let fixture: ComponentFixture<VenueMesiMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueMesiMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueMesiMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
