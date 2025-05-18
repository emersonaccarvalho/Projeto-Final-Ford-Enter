import { Component, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Modal } from 'bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

constructor(private titleService: Title) {}

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
  


  //Métodos



  ngOnInit() {
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

    resetForm(){
      const form = document.getElementById('contactForm') as HTMLFormElement;
      form.reset();
      this.focusNome();
    }

    focusNome(){
    const nomeElement = document.getElementById("userNameContact") as HTMLInputElement
    nomeElement.focus();

    }



}
