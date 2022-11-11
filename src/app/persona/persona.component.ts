import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "../persona.model";
import {PersonasServices} from "../personas.services";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasServices) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    // @ts-ignore
    this.personasService.saludar.emit(this.indice);
  }

}
