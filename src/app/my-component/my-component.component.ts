import { Component } from '@angular/core';

@Component({
	selector: 'app-my-component',
	templateUrl: './my-component.component.html',
	styleUrls: [ './my-component.component.css' ]
})
export class MyComponentComponent {
	title = 'my application';
	author = 'Esteban Restrepo';
	imgSource = './../favicon.ico';
	disable = true;
}
