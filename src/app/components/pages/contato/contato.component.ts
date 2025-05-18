import { Component, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Modal } from 'bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  imports: [HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

constructor(private titleService: Title,private http:HttpClient) {}

  //variáveis
  cpfTrue:boolean = false;
  emailTrue:boolean = false;
  todosOsCamposPreenchidos:boolean = false;
  nomeValue:String = "";
  cpfValue:String = "";
  emailValue:String = "";
  assuntoValue:String = "";
  mensagemValue:String = "";
  emailValid:boolean = false;
  modalPopup!:Modal;
  popupTitle:string = "Preencha todos os campos";
  imagemVeiculoRanger:string = "";
  showLGPD:boolean = false;


  //Métodos



  ngOnInit() {
    this.setVehicleInfoByOptionID(1);
    this.titleService.setTitle('Contato - Ford do Brasil');
    this.InicializarPopup();
    this.focusNome();
    
  }

  InicializarPopup(){
      const element = document.getElementById('mainPopup');
      if (element) {
        this.modalPopup = new Modal(element,{
      backdrop: false

      });
      element.addEventListener('hidden.bs.modal', () => {
      this.resetForm();});
      }
      
  }

  verificarCamposPreenchidos() :void{
    this.showLGPD = false;
    const nomeElement = document.getElementById("userNameContact") as HTMLInputElement
    this.nomeValue = nomeElement.value

    const cpfElement = document.getElementById("userCPF") as HTMLInputElement
    this.cpfValue = cpfElement.value

    const emailElement = document.getElementById("userMail") as HTMLInputElement
    this.emailValue = emailElement.value;
    this.emailValid = emailElement.validity.valid;

    const assuntoElement = document.getElementById("selectAssunto") as HTMLInputElement
    this.assuntoValue = assuntoElement.value

    const mensagemElement = document.getElementById("mensagemUser") as HTMLInputElement
    this.mensagemValue = mensagemElement.value

    
    if (!this.nomeValue || !this.cpfValue || !this.emailValue || !this.assuntoValue || !this.mensagemValue || !this.emailValid){
      this.todosOsCamposPreenchidos = false;
    } else {
      this.todosOsCamposPreenchidos = true;
      this.popupTitle = "Mensagem recebida!"
      
    }

    this.showPopup()
    }

    showPopup(){
      this.modalPopup.show();
    }

    showPopupLGPD(){
      this.showLGPD = true;
      this.modalPopup.show();
      this.popupTitle = "Termos da LGPD"
    }

    resetForm(){
      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (this.todosOsCamposPreenchidos){
      form.reset();
      this.focusNome();
      this.showLGPD = false;
      this.popupTitle = "Preencha todos os campos"
      }
    }

    focusNome(){
    const nomeElement = document.getElementById("userNameContact") as HTMLInputElement
    nomeElement.focus();

    }

    setVehicleInfoByOptionID(ID:number) {
    this.http.post<any>("http://localhost:3001/vehicleDataByID",{ID}).subscribe({
      next: (res) => {
        this.imagemVeiculoRanger = res.img;

      },
      error: (err) => {
        console.error("Erro ao buscar veículos: ID:", err);
      }
    });
    }



}
