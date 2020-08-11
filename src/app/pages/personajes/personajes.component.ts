import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { PersonajeModel } from 'src/app/models/personaje.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: PersonajeModel[] = [];

  constructor( private personajesService: PersonajesService ) { }

  ngOnInit(): void {

    this.personajesService.obtenerPersonajes()
    .subscribe( resp => {
     
      this.personajes = resp[1];
    });
  }

}
