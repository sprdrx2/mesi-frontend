import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UglyHomeComponentComponent } from './ugly-home-component.component';

describe('UglyHomeComponentComponent', () => {
  let component: UglyHomeComponentComponent;
  let fixture: ComponentFixture<UglyHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UglyHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UglyHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
