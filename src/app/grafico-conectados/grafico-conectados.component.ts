import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico-conectados',
  templateUrl: './grafico-conectados.component.html',
  styleUrls: ['./grafico-conectados.component.css']
})
export class GraficoConectadosComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    new Chart('conectadosChart', {
      type: 'bar',
      data: {
        labels: ['Ranger', 'Mustang', 'Territory', 'Bronco Sport'],
        datasets: [{
          label: 'Veículos Conectados',
          data: [1000, 500, 800, 650],
          backgroundColor: ['#003399', '#CC0000', '#006633', '#FF9900']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Veículos Conectados Ford' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
