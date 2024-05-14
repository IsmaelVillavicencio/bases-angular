
import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid } from 'uuid';

@Component({
	selector: 'dbz-list',
	templateUrl: './list.component.html'
})
export class ListComponent {

	//Recibimos la lista de personajes desde el componente padre
	@Input()
	public listCharacters: Character[] = [{
		id: uuid(),
		name: 'Gohan',
		power: 10000
	}];

	//Creamos un evento para emitir hacia el componente padre
	/*
	@Output()
	public onDeleteCharacter: EventEmitter<number> = new EventEmitter();
	*/
	@Output()
	public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

	deleteCharacterById(id: string): void {
		//Emitimos el evento hacia el componente padre, enviando el index del personaje a eliminar
		this.onDeleteCharacterById.emit(id);

	}
	/*
	deleteCharacter(index: number): void {
		//Emitimos el evento hacia el componente padre, enviando el index del personaje a eliminar
		this.onDeleteCharacter.emit(index);
	}
	*/
}
