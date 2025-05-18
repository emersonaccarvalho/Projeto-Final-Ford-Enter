import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-updates-chart',
  imports: [],
  templateUrl: './updates-chart.component.html',
  styleUrl: './updates-chart.component.css'
})
export class UpdatesChartComponent implements AfterViewInit{

ngAfterViewInit(): void {
    const ctx = document.getElementById('atualizadosChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ranger', 'Mustang', 'Territory', 'Bronco Sport'],
        datasets: [{
          label: 'Veículos atualizados',
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
          title: { display: true, text: 'Veículos Ford com sistema atualizado' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }


  
}
