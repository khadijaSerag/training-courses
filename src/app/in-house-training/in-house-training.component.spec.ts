import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHouseTrainingComponent } from './in-house-training.component';

describe('InHouseTrainingComponent', () => {
  let component: InHouseTrainingComponent;
  let fixture: ComponentFixture<InHouseTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InHouseTrainingComponent]
    });
    fixture = TestBed.createComponent(InHouseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
