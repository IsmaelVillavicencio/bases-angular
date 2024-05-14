import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
	public heroNames: string[] = ['Iroman', 'Spiderman', 'Hulk', 'Thor', 'Black Widow'];
	public deleteHeroName?: string = '';

	public addHero(heroName: string): void {
		this.heroNames.push(heroName);
	}

	removeLastHero(): void {
		this.deleteHeroName = this.heroNames.pop();
	}

	public removeHero(heroName: string): void {
		const index = this.heroNames.indexOf(heroName);
		if (index !== -1) {
			this.heroNames.splice(index, 1);
		}
	}
}
