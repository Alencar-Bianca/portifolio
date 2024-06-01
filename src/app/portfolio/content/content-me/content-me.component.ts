import { Component } from '@angular/core';
import { ContentAboutMeComponent } from '../content-about-me/content-about-me.component';

@Component({
  selector: 'app-content-me',
  standalone: true,
  imports: [ContentAboutMeComponent],
  templateUrl: './content-me.component.html',
  styleUrl: './content-me.component.scss'
})
export class ContentMeComponent {

}
