import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [],
  templateUrl: './voluntariado.component.html',
  styleUrl:'./voluntariado.component.css'
  
})
export class VoluntariadoComponent {

  voluntariado = {
   nombre: '',
   apellido: '',
   email: '',
   telefono: '',
   area_interes: '',
     };
  confirmEmail: string = '';
}
