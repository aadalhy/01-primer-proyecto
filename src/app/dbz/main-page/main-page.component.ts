import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listaPersonajes: Personaje[]=[
    {
      nombre: 'Goku',
      poder: 10000
    },
    {
      nombre: 'Trunks',
      poder: 8000
    },
    {
      nombre: 'Vegeta',
      poder: 9000
    },
    {
      nombre: 'Piccolo',
      poder: 7000
    }
  ]

  nuevo: Personaje =
      {
        nombre: 'Maestro Roshi',
        poder: 1000
      } 

  constructor() { }

  ngOnInit(): void {
  }

  agregarNuevoPersonaje(argumento:Personaje)
  {
    console.log(argumento);
    this.listaPersonajes.push(argumento);
  }

  // cambiarNombre(event:any)
  // {
  //   console.log(event)
  // }
}
