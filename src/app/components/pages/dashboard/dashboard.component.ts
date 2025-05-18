import { AfterViewInit, Component, isStandalone } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { VendasChartComponent } from '../../vendas-chart/vendas-chart.component';
import { GraficoConectadosComponent } from '../../grafico-conectados/grafico-conectados.component';
import { UpdatesChartComponent } from '../../updates-chart/updates-chart.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,VendasChartComponent,GraficoConectadosComponent,UpdatesChartComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  constructor(private http:HttpClient, private router:Router, private titleService: Title){}

  //Variáveis
  optionSelect:number = 1;
  totalDeVendas:number = 0;
  totalConectados:number = 0;
  updateSOftware:number = 0;
  odometro:number = 0;
  nivelDeCombustivel:string = "-";
  statusVeiculo:string = "-";
  latitude:number = 0;
  longitude:number = 0;
  vinVeiculo:string = "-";
  imagemVeiculo:String = "";
  idVeiculo:number = 1;
  modeloVeiculo:String = "";
  isLoggedIn:boolean = localStorage.getItem('loggedIn') === 'true' || sessionStorage.getItem('loggedIn') === 'true';




  //Métodos

  ngOnInit() {
      this.titleService.setTitle('Dashboard - Ford do Brasil');
      if (!this.isLoggedIn){
        this.router.navigate(["/"]);

      }
  }

  ngAfterViewInit(): void {
    this.atualizarOptionSelect();  
    this.optionSelect = 1;
    this.setVehicleInfoByOptionID(this.optionSelect);
  }

  atualizarOptionSelect(){
    //Atualiza o valor gravado do select que tem os veículos. É chamado quando o select tem o método change
    const selectVehicle = document.getElementById("dropdownVehicle") as HTMLSelectElement
    this.optionSelect = parseInt(selectVehicle.value);
    if (this.optionSelect){
    this.setVehicleInfoByOptionID(this.optionSelect);
    }
  }

  atualizarInputVin(){
    //Atualiza o input com base no veículo que está sendo alterado no Select
    const inputElement = document.getElementById('inputVin') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = this.vinVeiculo;
    }

  }

  setVehicleInfoByVin(vin: String) {
  this.http.post<any>("http://localhost:3001/vehicleData", { vin }).subscribe({
    next: (res) => {
      this.odometro = res.odometro;
      this.nivelDeCombustivel = res.nivelCombustivel;
      this.statusVeiculo = res.status;
      this.latitude = res.lat;
      this.longitude = res.long;
      this.vinVeiculo = res.vin;
      this.idVeiculo = res.id;
      this.modeloVeiculo = res.vehicle;
      this.imagemVeiculo = res.img;
      this.totalDeVendas = res.volumetotal;
      this.totalConectados = res.connected;
      this.updateSOftware = res.softwareUpdates;

      this.optionSelect = res.id; 
      this.atualizarValorGravadoSelect();
    },
    error: (err) => {
      console.error("Erro ao buscar veículos:", err);
    }
  });
}


    atualizarVeiculoSelecionadoVIN(){
      const vinInput = document.getElementById("inputVin") as HTMLInputElement;
      this.vinVeiculo = vinInput.value;
      this.setVehicleInfoByVin(this.vinVeiculo);
      this.atualizarValorGravadoSelect();

    }

    atualizarValorGravadoSelect(){
      const selectVehicle = document.getElementById("dropdownVehicle") as HTMLSelectElement;
      selectVehicle.value = String(this.optionSelect)
      selectVehicle.dispatchEvent(new Event('change')); 

    }


    setVehicleInfoByOptionID(ID:number) {
    this.http.post<any>("http://localhost:3001/vehicleDataByID",{ID}).subscribe({
      next: (res) => {
        this.odometro = res.odometro;
        this.nivelDeCombustivel = res.nivelCombustivel;
        this.statusVeiculo = res.status;
        this.latitude = res.lat;
        this.longitude = res.long;
        this.vinVeiculo = res.vin;
        this.idVeiculo = res.id;
        this.modeloVeiculo = res.vehicle;
        this.imagemVeiculo = res.img;
        this.totalDeVendas = res.volumetotal;
        this.totalConectados = res.connected;
        this.updateSOftware = res.softwareUpdates;
        this.atualizarInputVin();
      },
      error: (err) => {
        console.error("Erro ao buscar veículos: ID:", ID, err);
      }
    });
    }










}
