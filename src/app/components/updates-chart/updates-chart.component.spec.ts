import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesChartComponent } from './updates-chart.component';

describe('UpdatesChartComponent', () => {
  let component: UpdatesChartComponent;
  let fixture: ComponentFixture<UpdatesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
