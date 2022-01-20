import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // 1- Creo el evento de salida
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private DbzService: DbzService) { }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.DbzService.agregarPersonaje(this.nuevo);

    // 2- Cargo el valor a emitir en el evento
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
