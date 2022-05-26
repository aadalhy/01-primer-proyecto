import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h3>la base es: {{base}}</h3>
    <button (click)="acumular(base)"> +{{base}} </button>
    <span>{{contador}}</span>
    <button (click)="acumular(-base)"> -{{base}} </button>`
    
    
})

export class ContadorComponent
{
    title = 'Contador';
    contador:number=0;
    base: number = 7;

    acumular(valor:number){
    this.contador += valor;
  }
}