import { Component } from '@angular/core';
import { Curso } from 'src/app/modelos/interfaces/curso';
import { CURSOS } from 'src/assets/json/db-data';

@Component({
	selector: 'app-listado-cursos',
	templateUrl: './listado-cursos.component.html',
	styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent {
	cursos = CURSOS;
}
