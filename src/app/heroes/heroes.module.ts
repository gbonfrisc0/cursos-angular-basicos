import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ // componentes del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Cosas publicas o visubles fuera del modulo
        ListadoComponent
    ],
    imports: [ // Van modulos
        CommonModule // Ofrece directivas NgFor NgIf
    ]
})
export class HeroesModule { }