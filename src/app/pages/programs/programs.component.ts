import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  imports: [],
  templateUrl: './programs.component.html',
})
export class ProgramsComponent {

  abrirWhatsApp(programa: string): void {

    const numero = '573208727918';

    const mensaje =
      `Hola, quisiera recibir más información sobre ${programa} de la Fundación Caja de Esperanza.`;

    const url =
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }

}