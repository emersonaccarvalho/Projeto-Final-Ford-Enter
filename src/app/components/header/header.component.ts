import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { LogoImageComponent } from '../logo-image/logo-image.component';
import { Router } from '@angular/router';
import { LoginformComponent } from '../loginform/loginform.component';
import { Modal } from 'bootstrap';



@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoImageComponent,LoginformComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  constructor(private router: Router) {}

  //Definição de todas as variáveis do app aqui
  logado:boolean = localStorage.getItem('loggedIn') === 'true' || sessionStorage.getItem('loggedIn') === 'true';
  popupLogin!:HTMLElement;
  private modal!: Modal;

  //Métodos aqui


  ngAfterViewInit(): void {
    this.inicializarPopupLogin();
  }

   inicializarPopupLogin(){
      const element = document.getElementById('popupLogin');
      if (element) {
        this.modal = new Modal(element,{
      backdrop: false
      });
      }
    }

    
  showPopupLogin(): void {
    this.modal.show();
    setTimeout(() => {
    const userNameInput = document.getElementById("userName") as HTMLInputElement;
    userNameInput?.focus();
  }, 300); 
  }

 deslogar(){
  localStorage.setItem('loggedIn', 'false');
  sessionStorage.setItem('loggedIn', 'false');
  window.location.reload();

}

  goToContactPage(){
    this.router.navigate(["/contato"]);
    
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }

  goToDashboardPage(){
    this.router.navigate(['/dashboard']);
  }


}
