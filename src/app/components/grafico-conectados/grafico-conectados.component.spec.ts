import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoConectadosComponent } from './grafico-conectados.component';

describe('GraficoConectadosComponent', () => {
  let component: GraficoConectadosComponent;
  let fixture: ComponentFixture<GraficoConectadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoConectadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoConectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
