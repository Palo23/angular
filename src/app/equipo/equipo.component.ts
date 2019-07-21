import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo: any[] = [];

  constructor(private ruta: ActivatedRoute, protected servicio: EquipoService) {
    this.ruta.params.subscribe(params => {
      this.equipo = this.servicio.obtenerUno(params.id);
    });
  }

  ngOnInit() {
  }

}
