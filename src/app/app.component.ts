import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuInfoMeComponent } from './portfolio/menu-info-me/MenuInfoMeComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuInfoMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
