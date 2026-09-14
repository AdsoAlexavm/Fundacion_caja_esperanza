import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contacto = {
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  };

  mensajeExito = '';

  constructor(private http: HttpClient) {}

  enviarContacto() {

    if (
      !this.contacto.nombre ||
      !this.contacto.correo ||
      !this.contacto.telefono ||
      !this.contacto.mensaje
    ) {
      alert('Por favor completa todos los campos.');
      return;
    }

    this.http.post(
      'http://localhost/api_fundacion/guardarContacto.php',
      this.contacto
    ).subscribe({

      next: (respuesta) => {
        console.log(respuesta);

        this.mensajeExito = '¡Enviado con éxito!';

        this.contacto = {
          nombre: '',
          correo: '',
          telefono: '',
          mensaje: ''
        };
      },

      error: (error) => {
        console.error(error);
      }

    });
  }
}