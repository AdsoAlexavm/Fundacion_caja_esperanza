import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    CarruselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}