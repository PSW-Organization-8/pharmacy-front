import { TestBed } from '@angular/core/testing';

import { AllActiveTendersViewService } from './all-active-tenders-view.service';

describe('AllActiveTendersViewService', () => {
  let service: AllActiveTendersViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllActiveTendersViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
