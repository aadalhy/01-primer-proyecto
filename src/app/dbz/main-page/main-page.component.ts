import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[]=[
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
      nombre: 'Krillin',
      poder: 7000
    }
  

  constructor() { }

  ngOnInit(): void {
  }

  agregar() 
  {
    if (this.nuevo.nombre.trim().length ===0)
    {
      return;
    }
    console.log(this.nuevo)

    this.personajes.push(this.nuevo);
    this.nuevo =
      {
        nombre: "",
        poder: 0,
      }

  }

  cambiarNombre(event:any)
  {
    console.log(event)
  }
}
