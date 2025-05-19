import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private router:Router) {}


  //variaveis
  imgListCarousel:string[] = ["https://quatrorodas.abril.com.br/wp-content/uploads/2024/10/pre-equator-sport-2.jpg.webp","https://quatrorodas.abril.com.br/wp-content/uploads/2024/07/2025-Ford-Maverick-Lariat_01-e1722439074407.jpg?quality=70&strip=info&w=1024&crop=1","https://quatrorodas.abril.com.br/wp-content/uploads/2024/08/2025-Bronco-Sport_26-e1724696919249.jpg?quality=70&strip=info&w=1024&crop=1","https://quatrorodas.abril.com.br/wp-content/uploads/2023/09/2024-Ford-F-150-Raptor-1-1536x864-1-e1694631022886.webp?quality=70&w=1024&crop=1"];
  infoListCarousel:string[] = ["Sofisticação, tecnologia e conforto em um SUV médio que vai transformar sua experiência ao volante","A picape que une robustez, conforto e inteligência em cada detalhe.","Mais ousado, mais off-road, mais você.","A fera do off-road voltou ainda mais selvagem."];
  infoCallToAction:String[] = ["Territory 2025","Ford Maverick Lariat 2025","Novo Bronco Sport 2025","Ford F-150 Raptor 2025"]

  indexNextImageToDisplay:number = 0;
  nextInfoToShow:string = this.infoListCarousel[this.indexNextImageToDisplay]

  alternarImagensCarrosel(){
    
    setInterval(() => {
      console.log(this.nextInfoToShow)
      console.log(this.imgListCarousel[this.indexNextImageToDisplay])
      if (this.indexNextImageToDisplay < this.imgListCarousel.length-1 ){
      this.indexNextImageToDisplay += 1;
      } else {
        this.indexNextImageToDisplay = 0;
      }
      this.nextInfoToShow = this.infoListCarousel[this.indexNextImageToDisplay]

    }, 4500);



  }


  ngOnInit() {
    this.titleService.setTitle('Home - Ford do Brasil');
    this.alternarImagensCarrosel()

  }

  goToLancamentoPage(){
    this.router.navigate(["/lancamento"]);
  }


  

}


