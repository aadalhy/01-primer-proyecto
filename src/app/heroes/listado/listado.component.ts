import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent 
{

  heroes: string [] = ["Batman", "Superman", "Mujer Maravilla", "Flash", "Aquaman", "Gatubela", "Robin"];

  heroeBorrado: string  = "";

  borrarHeroe()
  {
    let borrado: boolean = false;
    //this.heroes.splice(0,1)
    this.heroeBorrado =  this.heroes.shift() || '';

  }
}
