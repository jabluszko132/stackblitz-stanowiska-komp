import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LightblueElementsModule } from './lightblue-elements/lightblue-elements.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LightblueElementsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-lightblue-button></app-lightblue-button>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
