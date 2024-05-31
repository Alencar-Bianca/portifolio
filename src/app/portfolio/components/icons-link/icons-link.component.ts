import { Component, signal } from '@angular/core';
import { IconsLinkInterface } from '../../interfaces/icons-link-interface';

@Component({
  selector: 'app-icons-link',
  standalone: true,
  imports: [],
  templateUrl: './icons-link.component.html',
  styleUrl: './icons-link.component.scss'
})
export class IconsLinkComponent {

  public icons = signal<IconsLinkInterface[]>([
    {
      link: 'https://www.linkedin.com/in/bianca-a-246b36a8/',
      img: '../../../../assets/icon/linkedin.png',
      title: 'linkedin'
    },
    {
      link: 'https://www.linkedin.com/in/bianca-a-246b36a8/',
      img: '../../../../assets/icon/instagram.png',
      title: 'instagram'
    },
    {
      link: 'https://github.com/Alencar-Bianca',
      img: '../../../../assets/icon/github.png',
      title: 'github'
    },
    {
      link: 'https://www.frontendmentor.io/profile/Alencar-Bianca',
      img: '../../../../assets/icon/frontendmentor.png',
      title: 'frontend mentor'
    }
  ]);
}
