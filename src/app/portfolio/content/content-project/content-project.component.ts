import { Component, signal } from '@angular/core';
import { ProjectsInterface } from '../../interfaces/projects-interfaces';

@Component({
  selector: 'app-content-project',
  standalone: true,
  imports: [],
  templateUrl: './content-project.component.html',
  styleUrl: './content-project.component.scss'
})
export class ContentProjectComponent {
  public projects = signal<ProjectsInterface[]> ([
    {
      src: 'assets/projects/rickandmorty.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '150px',
      height: '150px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    }
  ])
}
