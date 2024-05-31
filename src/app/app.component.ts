import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuInfoMeComponent } from './portfolio/menu-info-me/MenuInfoMeComponent';
import { ContentMeComponent } from './portfolio/content/content-me/content-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuInfoMeComponent, ContentMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
