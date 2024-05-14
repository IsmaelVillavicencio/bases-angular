import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		DbzComponent,
		ListComponent,
		AddCharacterComponent
	],
	exports: [
		DbzComponent,
	],
	imports: [
		CommonModule,
		FormsModule
	],
})
export class DbzModule { }
