import { TestBed } from '@angular/core/testing';

import { SaveMedicationConsumptionReportService } from './save-medication-consumption-report.service';

describe('SaveMedicationConsumptionReportService', () => {
  let service: SaveMedicationConsumptionReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveMedicationConsumptionReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
