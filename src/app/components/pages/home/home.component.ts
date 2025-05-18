import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Home - Ford do Brasil');
  }


}
