import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { VendasChartComponent } from '../../vendas-chart/vendas-chart.component';
import { GraficoConectadosComponent } from '../../../grafico-conectados/grafico-conectados.component';
import { UpdatesChartComponent } from '../../updates-chart/updates-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,FooterComponent,VendasChartComponent,GraficoConectadosComponent,UpdatesChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
