import {Component, OnInit} from '@angular/core';
import {Persona} from "./persona.model";
import {LoggingService} from "./LoggingService.service";
import {PersonasServices} from "./personas.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Listado de personas';
  personas: Persona[] = [];

  constructor(private logginService: LoggingService, private personasService: PersonasServices) {}

  ngOnInit() {
    this.personas = this.personasService.personas;
  }

  // personaAgregada(persona:Persona){
  //   // this.personas.push(persona);
  //   this.personasService.agregarPersona(persona)
  // }

}
