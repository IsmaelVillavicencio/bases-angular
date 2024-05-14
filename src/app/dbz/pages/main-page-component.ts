import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-dbz-main-page',
	templateUrl: 'main-page-component.html'
})

export class DbzComponent {

	constructor(
		//public dbzService: DbzService
		private dbzService: DbzService
	){}

	get characters(): Character[] {
		//Se modifica el objeto original
		// this.dbzService.characters;
		//Se crea una copia del objeto original
		//[...this.dbzService.characters]
		return [...this.dbzService.characters];
	}

	onDeleteCharacterById(id: string): void {
		this.dbzService.onDeleteCharacterById(id);
	}

	onNewCharacter(character: Character): void {
		this.dbzService.onNewCharacter(character);
	}
}
