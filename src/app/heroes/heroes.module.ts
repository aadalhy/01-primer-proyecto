import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //solo se puede declarar en un solo modulo
    //es todo lo que esta dentro del modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //componentes que quiero compartir con otros modulos
    exports:[
        ListadoComponent
    ],
    imports: [
        //esto es para que otros modulos los puedan utilizar
        CommonModule
    ],
    providers: []
    //bootstrap  solo va en el app.module principal

})
export class HeroesModule {}