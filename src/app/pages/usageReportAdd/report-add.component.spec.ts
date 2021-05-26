import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reportAddComponent } from './report-add.component';

describe('reportAddComponent', () => {
  let component: reportAddComponent;
  let fixture: ComponentFixture<reportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ reportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(reportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
