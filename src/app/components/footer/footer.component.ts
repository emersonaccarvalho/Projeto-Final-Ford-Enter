import { Component } from '@angular/core';
import { LogoImageComponent } from '../logo-image/logo-image.component';

@Component({
  selector: 'app-footer',
  imports: [LogoImageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  openSocialNetwork(option:string){
    const website = "https://www." + option + ".com/fordbrasil/"
    window.open(website,'_blank');
  }  
}
