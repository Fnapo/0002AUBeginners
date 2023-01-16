import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../modelos/interfaces/curso';

@Component({
	selector: 'app-card-curso',
	templateUrl: './card-curso.component.html',
	styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent {
	@Input()
	curso!: Curso;
	@Input()
	indexCurso = 0;

	@Output()
	cursoSeleccionado = new EventEmitter<Curso>();

	OnBotonClick() {
		this.cursoSeleccionado.emit(this.curso);
	}
}
