import { Injectable, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';

@Injectable({
	providedIn: 'root'
})
export class DbzService {
	constructor() { }
	public characters: Character[] = [
		{
			id: uuid(),
			name: 'Goku',
			power: 15000
		},
		{
			id: uuid(),
			name: 'Vegeta',
			power: 8500
		},
		{
			id: uuid(),
			name: 'Trunks',
			power: 8000
		}
	];

	onNewCharacter(character: Character): void {
		const newCharacter: Character = { id: uuid(), ...character};
		this.characters.push(newCharacter);
	}

	onDeleteCharacter(index: number): void {
		this.characters.splice(index, 1);
	}

	onDeleteCharacterById(id: string): void {
		this.characters = this.characters.filter(character => character.id !== id);
	}
}
