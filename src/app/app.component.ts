import { Component } from '@angular/core';

import { blockInitialRenderAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    blockInitialRenderAnimation //No-Op transition. It prevents Animations during
  ]                             //the initial render of ngIf in the children components
})
export class AppComponent {}
