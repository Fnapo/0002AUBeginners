import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCursoComponent } from './componentes/card-curso/card-curso.component';
import { CabeceraCursosComponent } from './componentes/cabecera-cursos/cabecera-cursos.component';
import { ListadoCursosComponent } from './componentes/listado-cursos/listado-cursos.component';

@NgModule({
	declarations: [
		AppComponent,
		CardCursoComponent,
		CabeceraCursosComponent,
  ListadoCursosComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
