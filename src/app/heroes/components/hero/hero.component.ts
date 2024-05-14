import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
	public name:string = 'Iroman';
	public age:number  = 45;


	get capitalizedName(): String {
		return this.name.toUpperCase();
	}

	heroDescription(): String {
		return `${this.capitalizedName} is ${this.age} years old.`;
	}

	changeName(): void {
		this.name = 'Spiderman';
	}

	changeAge(): void {
		this.age = 20;
	}

}
