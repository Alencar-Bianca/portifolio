import { Component, signal } from '@angular/core';
import { InfoPersonInterface } from '../../interfaces/info-person-interface';

@Component({
  selector: 'app-info-person',
  standalone: true,
  imports: [],
  templateUrl: './info-person.component.html',
  styleUrl: './info-person.component.scss'
})
export class InfoPersonComponent {
  public infos = signal<InfoPersonInterface[]>([
    {
      link: 'mailto:bianca.re4@hotmail.com',
      img: '../../../../assets/icon/email.svg',
      title: 'Email',
      text: 'bianca.re4@hotmail.com'
    },
    {
      link: '#',
      img: '../../../../assets/icon/phone.svg',
      title: 'Tel',
      text: '(11) XXXXX-XXXX'
    },
    {
      link: '#',
      img: '../../../../assets/icon/map.svg',
      title: 'Localização',
      text: 'São Paulo, Brasil'
    },
  ]);
}
