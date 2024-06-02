import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { ContentAboutMeComponent } from '../content-about-me/content-about-me.component';
import { ContentResumeComponent } from '../content-resume/content-resume.component';

@Component({
  selector: 'app-content-me',
  standalone: true,
  imports: [ContentAboutMeComponent, ContentResumeComponent],
  templateUrl: './content-me.component.html',
  styleUrl: './content-me.component.scss'
})
export class ContentMeComponent implements OnInit, OnDestroy {


  public isShowInfo = signal<string>('resume');

  public about = signal<boolean>(true);
  public resume = signal<boolean>(false);
  public project = signal<boolean>(false);

  public showInfoAbout(info:string , event: Event) {
    event.preventDefault();
    this.isShowInfo.set(info);

    console.log(info, this.isShowInfo());
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
