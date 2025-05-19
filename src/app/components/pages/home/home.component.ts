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
  infoListCarousel:string[] = ["Territory 2025 – Sofisticação, tecnologia e conforto em um SUV médio que vai transformar sua experiência ao volante","Ford Maverick Lariat 2025 – A picape que une robustez, conforto e inteligência em cada detalhe. Viva o melhor dos dois mundos. Experimente a nova geração da liberdade!","Novo Bronco Sport 2025 – Mais ousado, mais off-road, mais você. O facelift que eleva o espírito aventureiro com um visual ainda mais marcante e tecnologia de ponta. Desperte o explorador que existe em você!","Ford F-150 Raptor 2025 – A fera do off-road voltou ainda mais selvagem. Potência bruta, suspensão de alto desempenho e um design que impõe respeito em qualquer terreno. Domine o impossível com a picape que redefine limites."];

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


