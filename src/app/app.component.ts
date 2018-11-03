import { Component } from '@angular/core';

import { blockInitialRenderAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [blockInitialRenderAnimation]
})
export class AppComponent {}
