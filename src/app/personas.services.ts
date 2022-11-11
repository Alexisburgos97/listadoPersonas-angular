import {Persona} from "./persona.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PersonasServices{

  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Pedro', 'Lopez'),
    new Persona('Karina', 'Scholed')
  ];

  saludar = new EventEmitter<String>();

  constructor(private logginService: LoggingService) {
  }

  agregarPersona(persona:Persona){
    this.logginService.enviaMensajeAConsola('enviamos persona');
    this.personas.push(persona);
  }

}
