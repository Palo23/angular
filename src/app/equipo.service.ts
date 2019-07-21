import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: 'Luis',
      especialidad: 'Angular',
      descripcion: 'Muy alto , con visión a engordar y ama a su Abigail Posada'
    },
    {
      nombre: 'Abigail',
      especialidad: 'Calidad',
      descripcion: 'Pequeñita, cachetoncita y hermosita :3'
    }
  ];

  constructor() {
    }

    obtenerEquipo() {
      return this.equipo;
    }

    obtenerUno(i) {
      return this.equipo[i];
    }

   }
