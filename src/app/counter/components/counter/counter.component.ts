import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-counter',
	template: `
		<h3>counter: {{counter}}</h3>
		<button (click)="increaseBy()" >+1</button>
		<button (click)="decreaseBy()" >-1</button>
		<button (click)="reset()" >reset</button>
	`,
})

export class CounterComponent implements OnInit {
	constructor() { }

	ngOnInit() { }

	public counter: number = 10;

	increaseBy():void {
		this.counter += 1;
	}

	decreaseBy():void {
		this.counter -= 1;
	}

	reset():void {
		this.counter = 10;
	}
}
