import { Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
   nombre: string = 'Aquaman';
   edad: number = 500;

    get nombreCapitalizado():string
    {
        return this.nombre.toUpperCase();
    }

   obtenerNombre():string
   {
       return `El Heroe es: ${this.nombre} - ${this.edad}` ;
   }

   cambiarNombre()
   {
       this.nombre="Batman";
       //console.log(this.nombre);
   }

   cambiarEdad()
   {
       this.edad=40;
       //console.log(this.edad);
   }
}
