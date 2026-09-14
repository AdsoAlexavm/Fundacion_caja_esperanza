import { Component } from '@angular/core';


@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
})
export class CarruselComponent {


  imagenes = [
    'assets/carrusel1.jpg',
    'assets/carrusel2.png',
    'assets/carrusel3.png'
  ];


  indiceActual = 0;


  siguiente(){

    this.indiceActual++;

    if(this.indiceActual >= this.imagenes.length){
      this.indiceActual = 0;
    }

  }


  anterior(){

    this.indiceActual--;

    if(this.indiceActual < 0){
      this.indiceActual = this.imagenes.length - 1;
    }

  }

}