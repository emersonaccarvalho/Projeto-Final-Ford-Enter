import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-vendas-chart',
  templateUrl: './vendas-chart.component.html',
  styleUrls: ['./vendas-chart.component.css']
})
export class VendasChartComponent implements AfterViewInit {

  //Variáveis
  selectOption:any;



  ngAfterViewInit(): void {

    const selectElementTypeChart = document.getElementById("selectChartType") as HTMLSelectElement
    this.selectOption = selectElementTypeChart.value;


    const ctx = document.getElementById('vendasChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: this.selectOption,
      data: {
        labels: ['Ranger', 'Mustang', 'Territory', 'Bronco Sport'],
        datasets: [{
          label: 'Vendas de Veículos',
          data: [1500, 800, 1250, 980],
          backgroundColor: ['#003399', '#CC0000', '#006633', '#FF9900'],
          borderColor: '#000',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Vendas de Veículos Ford' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
