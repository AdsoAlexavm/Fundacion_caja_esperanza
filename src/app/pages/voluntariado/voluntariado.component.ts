import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voluntariado',
  imports: [FormsModule],
  templateUrl: './voluntariado.component.html',
  styleUrl: './voluntariado.component.css'
})
export class VoluntariadoComponent {

  voluntario = {
    nombre: '',
    correo: '',
    telefono: '',
    area: '',
    mensaje: ''
  };

  mensajeExito = '';

  constructor(private http: HttpClient) {}

  enviarVoluntario() {

    if (
      !this.voluntario.nombre ||
      !this.voluntario.correo ||
      !this.voluntario.telefono ||
      !this.voluntario.area ||
      !this.voluntario.mensaje
    ) {
      alert('Por favor completa todos los campos.');
      return;
    }

    this.http.post(
      'http://localhost/api_fundacion/guardarVoluntario.php',
      this.voluntario
    ).subscribe({

      next: (respuesta) => {
        console.log(respuesta);

        this.mensajeExito = '¡Inscripción enviada con éxito!';

        this.voluntario = {
          nombre: '',
          correo: '',
          telefono: '',
          area: '',
          mensaje: ''
        };
      },

      error: (error: any) => {
        console.error(error);
      }

    });
  }
}