import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-loginform',
  standalone: true, 
  imports: [HttpClientModule, CommonModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent implements AfterViewInit {

  constructor(private http: HttpClient, private router: Router) {}


  //Variáveis

  userName:String = "";
  userPassWord:String = "";
  private modalInfo!: Modal;
  private modalRetorno!: Modal;
  tipoDeRetornoCredenciais:String = "";
  tituloPopupRetornoCredenciais:String ="Atenção"
  iconePopupRetorno:String = "bi bi-exclamation-triangle"
  loginBemSucedido:boolean = false;
  rememberMe:boolean = false;
  isLoggedIn:boolean = localStorage.getItem('loggedIn') === 'true' || sessionStorage.getItem('loggedIn') === 'true';



  //Métodos

  ngAfterViewInit(): void {
    this.inicializarPopupInfo();
    this.inicializarPopupErroCredenciais();
  }

  inicializarPopupInfo(){
      const element = document.getElementById('popupInfo');
      if (element) {
        this.modalInfo = new Modal(element,{
      backdrop: false
      });
      }
    }

    showPopupInfo(){
      this.modalInfo.show();
     }

    inicializarPopupErroCredenciais(){
      const element = document.getElementById('popupFillCredentials');
      if (element) {
        this.modalRetorno = new Modal(element,{
      backdrop: false
      });
      }
    }

    showPopupRetornoCredenciais(){
      this.modalRetorno.show();
     }

     logarUser(){
      const inputUserNameValue = document.getElementById("userName") as HTMLInputElement
      this.userName = inputUserNameValue.value

      const inputUserPassValue = document.getElementById("password") as HTMLInputElement
      this.userPassWord = inputUserPassValue.value

      console.log(this.userName);
      console.log(this.userPassWord)
      if (!this.userName || !this.userPassWord){
        this.tipoDeRetornoCredenciais = "As suas credenciais (nome de usuário e/ou senha) estão em branco. Por favor, preencha-as corretamente e clique em acessar novamente.";
        this.showPopupRetornoCredenciais();
      } else {
        this.requisicaoApiLogin()
      }
     }

     requisicaoApiLogin(){

      this.http.post('http://localhost:3001/login',{nome:this.userName,senha:this.userPassWord},{
        headers: new HttpHeaders({ 'Accept': 'application/json' })
      }).subscribe({
        next: (res) => {
          this.tituloPopupRetornoCredenciais ="Sucesso",
          this.iconePopupRetorno = "bi bi-check-all",
          this.loginBemSucedido = true,
          this.tipoDeRetornoCredenciais = "Credenciais corretas. Por favor, aguarde enquanto te redirecionamos.";
          this.showPopupRetornoCredenciais(),
          this.saveUser(),
          this.soltarConfete(),
          setTimeout(() => {
          window.location.reload();
          }, 3000);

        },
        error: (err) => {
        this.showPopupRetornoCredenciais(),
        this.tipoDeRetornoCredenciais = "As suas credenciais (nome de usuário e/ou senha) estão incorretas. Por favor, preencha-as corretamente e clique em acessar novamente.";
        }
      })
     }

    soltarConfete() {
    const duration =  1500;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  saveUser() {
  const inputRemember = document.getElementById("rememberMe") as HTMLInputElement;

  if (inputRemember && inputRemember.checked) {
    localStorage.setItem('loggedIn', 'true');
  } else {
    sessionStorage.setItem('loggedIn', 'true');
  }
}

deslogar(){
  localStorage.setItem('loggedIn', 'false');
  sessionStorage.setItem('loggedIn', 'false');
}

    

}
