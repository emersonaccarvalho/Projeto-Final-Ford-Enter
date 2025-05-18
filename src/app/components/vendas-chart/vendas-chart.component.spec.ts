import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasChartComponent } from './vendas-chart.component';

describe('VendasChartComponent', () => {
  let component: VendasChartComponent;
  let fixture: ComponentFixture<VendasChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendasChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
