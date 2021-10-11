import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSportComponent } from './view-sport.component';

describe('ViewSportComponent', () => {
  let component: ViewSportComponent;
  let fixture: ComponentFixture<ViewSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
