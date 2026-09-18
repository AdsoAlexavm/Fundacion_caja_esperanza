import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
})
export class CarruselComponent implements AfterViewInit, OnDestroy {

  imagenes = [
    'assets/carrusel1.jpg',
    'assets/carrusel2.png',
    'assets/carrusel3.png',
    'assets/carrusel4.png',
    'assets/carrusel5.jpg',
    'assets/carrusel6.jpg',
    
  ];

  indiceActual = 0;

  intervalo: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      this.intervalo = setInterval(() => {
        this.siguiente();
      }, 3000);

    }

  }

  siguiente(): void {

    this.indiceActual++;

    if (this.indiceActual >= this.imagenes.length) {
      this.indiceActual = 0;
    }

  }

  anterior(): void {

    this.indiceActual--;

    if (this.indiceActual < 0) {
      this.indiceActual = this.imagenes.length - 1;
    }

  }

  ngOnDestroy(): void {

    if (this.intervalo) {
      clearInterval(this.intervalo);
    }

  }

}