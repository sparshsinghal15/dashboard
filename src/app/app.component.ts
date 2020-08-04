import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	submissions = [
		{
			event: 'Synchronicity',
			links: [ 'http://www.google.com', '', '', '' ]
		},
		{
			event: 'Junoon',
			links: [ 'http://www.google.com', 'http://www.google.com', 'http://www.google.com' ]
		},
		{
			event: 'DJWAR',
			links: [
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com'
			]
		},
		{
			event: 'DJWAR',
			links: [
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com'
			]
		},
		{
			event: 'DJWAR',
			links: [
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com',
				'http://www.google.com'
			]
		}
	];
	// submissions = [];
	title = 'dashboard2';
}
