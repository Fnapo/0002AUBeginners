import { Component } from '@angular/core';
import { CURSOS } from 'src/assets/json/db-data';
import { Curso } from './modelos/interfaces/curso';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'P002AFBeginners';
	imagen = "";
	cursos = CURSOS;

	OnCursoSeleccionado(curso: Curso) {
		this.imagen = curso.iconUrl;
	}
}
