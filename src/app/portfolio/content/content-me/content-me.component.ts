import { Component, signal } from '@angular/core';

import { ContentAboutMeComponent } from '../content-about-me/content-about-me.component';
import { ContentResumeComponent } from '../content-resume/content-resume.component';
import { ContentProjectComponent } from '../content-project/content-project.component';

@Component({
  selector: 'app-content-me',
  standalone: true,
  imports: [ContentAboutMeComponent, ContentResumeComponent, ContentProjectComponent],
  templateUrl: './content-me.component.html',
  styleUrl: './content-me.component.scss'
})
export class ContentMeComponent {
  public isShowInfo = signal<string>('about');


  public showInfoAbout(info:string , event: Event) {
    event.preventDefault();
    this.isShowInfo.set(info);

  }


}
