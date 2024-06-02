import { Component, signal } from '@angular/core';

import { ResumeMeInterface } from '../../interfaces/resume-me-interface';

@Component({
  selector: 'app-content-resume',
  standalone: true,
  imports: [],
  templateUrl: './content-resume.component.html',
  styleUrl: './content-resume.component.scss'
})
export class ContentResumeComponent {
  public infos = signal<ResumeMeInterface[]> ([
    {
      title: 'Desenvolvedora Back-end',
      info: 'Imóvel Guide | Mai 2022 - Jan 2024',
      description: 'Anteriormente, trabalhava com PHP/Laravel no backend e no frontend HTML, CSS e Javascript, desenvolvendo e melhorando uma aplicação Web para o setor imobiliário por aproximadamente dois anos. Participava do processo de seleção de novos colaboradores, dava suporte aos colegas de equipe para repasse de conhecimento/treinamento e analisava a saúde da aplicação (performance) através da ferramenta New Relic. Também identificava a causa raiz de bugs e aplicava as correções necessárias.'
    },
    {
      title: 'Desenvolvedora Fullstack',
      info: 'Finger Digital | Jan 2022 - Abr 2022',
      description: 'Recebia diversas demandas de projetos Web, implementei o design UX/UI no frontend; fiz também a implementação do backend e integração das duas partes em todos os projetos que entreguei nesse período.'
    }
  ])
}
