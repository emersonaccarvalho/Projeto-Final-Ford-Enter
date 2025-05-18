import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-lancamento',
  imports: [CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css'
})
export class LancamentoComponent implements AfterViewInit {


  //Variáveis
  modelos:string[] = ["Ranger","Mustang","Territory","Bronco Sport"];
  tiposDeVeiculos:string[] = ["Picape média","Esportivo cupê","SUV médio","SUV compacto","off-road"];
  tracao:string[] = ["4x4 (algumas versões)","Traseira (RWD) ou integral (AWD)","Dianteira (FWD)","4x4 (com gerenciamento de terreno)"];
  motorizacao:string[] = ["Diesel 2.0 biturbo (em geral)","Gasolina V8 / Ecoboost Turbo","1.5 Turbo a gasolina","1.5 Turbo a gasolina"];
  capacidadeDeCarga:string[] = ["Alta (cerca de 1 tonelada)","Baixa (porta-malas pequeno)","Média","Média"];
  design:string[] = ["Robusto e utilitário","Esportivo e agressivo","Sofisticado e familiar","Quadrado e aventureiro"];
  tecnologiaDeBordo:string[] = ["Intermediária/Alta (SYNC 4)","Alta (SYNC 4 com extras)","Alta (assistentes, sensores)","Alta (assistente off-road)"];
  imagens:string[] = ["https://dbc3a5f9517f17223ea2fa64e437d8a4.cdn.bubble.io/f1747306557989x712005362358248700/Ranger%20Farol%20Desligado.png","https://dbc3a5f9517f17223ea2fa64e437d8a4.cdn.bubble.io/f1747308059600x974471129767885700/Mustang%20Farol%20Desligado.png","https://dbc3a5f9517f17223ea2fa64e437d8a4.cdn.bubble.io/f1747308105028x673697292311654700/Territory%20Farol%20Desligado.png","https://dbc3a5f9517f17223ea2fa64e437d8a4.cdn.bubble.io/f1747308129122x500677605330078340/Bronco%20Farol%20Desligado.png"];

  opcoesEscolhidas:number[]=[]
  private popupCompare!:Modal



  //Métodos

    ngAfterViewInit(): void {
      this.inicializarPopup();
    }

  inicializarPopup(){
    const popupElement = document.getElementById("popupElement") as HTMLElement;
    if (popupElement){
      this.popupCompare = new Modal(popupElement,{
        backdrop : false
      });
    }
  }

  showPopup(){
    this.popupCompare.show()
  }

  hidePopup(){
    this.popupCompare.hide()
  }

  atualizarOpcoesEscolhidas(){
    this.opcoesEscolhidas.push
  }

  verificarCheckboxesPreenchidos(){
    
    this.opcoesEscolhidas = [];
    const checkboxElement1 = document.getElementById("checkboxInput1") as HTMLInputElement;
    const checkboxElement2 = document.getElementById("checkboxInput2") as HTMLInputElement;
    const checkboxElement3 = document.getElementById("checkboxInput3") as HTMLInputElement;
    const checkboxElement4 = document.getElementById("checkboxInput4") as HTMLInputElement;

    if (checkboxElement1?.checked){
      this.opcoesEscolhidas.push(0);
    }
    
    if (checkboxElement2?.checked){
      this.opcoesEscolhidas.push(1);
    }
    
    if (checkboxElement3?.checked){
      this.opcoesEscolhidas.push(2);
    }
    
    if (checkboxElement4?.checked){
      this.opcoesEscolhidas.push(3);
    }

    if (this.opcoesEscolhidas.length != 2){
      alert("Por favor, selecione 2 veículos para comparação.")
    } else {
      this.showPopup();
    }


  }


  marcarDesmarcarCheckbox(idCheckbox:any){
    const checkboxElement = document.getElementById(idCheckbox) as HTMLInputElement

    if (checkboxElement?.checked){
      checkboxElement.checked = false;
    } else {
      checkboxElement.checked = true
    }

  }





}
