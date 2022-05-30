import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable({
    providedIn: "root"
})
export class DbzService 
{
    private _listaPersonajes: Personaje[]=[
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

    get _ListaPersonajes(){
        return [... this._listaPersonajes];
    }

    agregarNuevoPersonaje(argumento:Personaje)
    {
    //console.log(argumento);
    this._listaPersonajes.push(argumento);
    }

}