import {Component, EventEmitter, Output} from '@angular/core';
import {Persona} from "../persona.model";
import {LoggingService} from "../LoggingService.service";
import {PersonasServices} from "../personas.services";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';

  constructor(private logginService: LoggingService,
              private personaService: PersonasServices ) {

    this.personaService.saludar.subscribe( (indice: number) => alert("El indice es: " + indice) )

  }

  agregarPersona(){
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    // this.personas.push(persona);
    // this.logginService.enviaMensajeAConsola('Enviamos persona: nombre: ' + persona.nombre + " apellido: "+persona.apellido);
    // this.personaCreada.emit(persona);
    this.personaService.agregarPersona(persona);
  }

}
