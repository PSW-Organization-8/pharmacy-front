import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActiveTendersViewComponent } from './all-active-tenders-view.component';

describe('AllActiveTendersViewComponent', () => {
  let component: AllActiveTendersViewComponent;
  let fixture: ComponentFixture<AllActiveTendersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllActiveTendersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActiveTendersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
