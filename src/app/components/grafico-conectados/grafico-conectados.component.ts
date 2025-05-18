import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-conectados',
  templateUrl: './grafico-conectados.component.html',
  styleUrls: ['./grafico-conectados.component.css']
})
export class GraficoConectadosComponent implements AfterViewInit {
  constructor(private http:HttpClient){}

  modelos:string[] = [];
  vendas:number[] = [];
  conectados:number[] = [];
  atualizados:number[] = [];

  atualizarBase(): void {

    this.setVehicleInfoByOptionID(1);
    this.setVehicleInfoByOptionID(2);
    this.setVehicleInfoByOptionID(3);
    this.setVehicleInfoByOptionID(4);

  }




  setVehicleInfoByOptionID(ID:number) {
    this.http.post<any>("http://localhost:3001/vehicleDataByID",{ID}).subscribe({
      next: (res) => {
        console.log("entrou next")
        this.modelos.push(res.vehicle);
        this.vendas.push(res.volumetotal);
        this.conectados.push(res.connected);
        this.atualizados.push(res.softwareUpdates);

        },
      error: (err) => {
        console.error("Erro ao buscar veículos: página vendas chart", err);
      }
    });
    }

  ngAfterViewInit(): void {
    this.atualizarBase();

    setTimeout(() => {
      
    new Chart('conectadosChart', {
      type: 'bar',
      data: {
        labels: this.modelos,
        datasets: [{
          label: 'Veículos Conectados',
          data: this.conectados,
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
    }, 500);

  }
}
