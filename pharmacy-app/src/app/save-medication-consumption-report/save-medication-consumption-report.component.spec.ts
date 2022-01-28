import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMedicationConsumptionReportComponent } from './save-medication-consumption-report.component';

describe('SaveMedicationConsumptionReportComponent', () => {
  let component: SaveMedicationConsumptionReportComponent;
  let fixture: ComponentFixture<SaveMedicationConsumptionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMedicationConsumptionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMedicationConsumptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
