import { Component, inject, signal } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { ProjectsInterface } from '../../interfaces/projects-interfaces';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-content-project',
  standalone: true,
  imports: [MatDialogModule, JsonPipe],
  templateUrl: './content-project.component.html',
  styleUrl: './content-project.component.scss'
})
export class ContentProjectComponent {
  public projects = signal<ProjectsInterface[]> ([
    {
      src: 'assets/projects/rickandmorty.png',
      alt: 'Projeto Rick and Morty',
      title: 'Rick and Morty',
      with: '150px',
      height: '150px',
      description:
        'Desenvolvi um projeto que consome a API do Rick and Morty, permitindo cadastro e login de usuários, exibindo seu nome ao logar. A aplicação apresenta informações detalhadas sobre personagens e episódios da série, com opções de filtro para facilitar a busca. Utilizei o framework Angular 17, juntamente com HTML, SCSS e TypeScript, destacando minhas habilidades em integração de APIs, autenticação de usuários e manipulação de dados dinâmicos.',
      link: 'https://rickemortyapi.netlify.app/'

    },
    {
      src: 'assets/projects/template.png',
      alt: 'Projeto Social links profile',
      title: 'Social links profile',
      with: '150px',
      height: '150px',
      description:
        'Criei um projeto de Social Links Profile como parte de um desafio do Frontend Mentor. Esse projeto funciona como um Linktree, permitindo que os usuários centralizem e compartilhem seus links de redes sociais em uma única página. Utilizei HTML e CSS para construir a interface, focando em um design responsivo e visualmente atraente. Este projeto demonstra minhas habilidades em criar interfaces modernas e intuitivas.',
      link: 'https://alencar-bianca.github.io/social-links-profile/'
    },
    {
      src: 'assets/projects/template2.png',
      alt: 'Projeto Contact Form',
      title: 'Contact Form',
      with: '150px',
      height: '150px',
      description:
        'Desenvolvi um Formulário de Contato como parte de um desafio do Frontend Mentor. Este formulário captura informações do usuário e realiza validações usando JavaScript, garantindo que os dados sejam inseridos corretamente antes do envio. A interface foi criada utilizando HTML e CSS, com atenção especial à usabilidade e ao design responsivo. Este projeto destaca minhas competências em front-end, validação de formulários e desenvolvimento de interfaces amigáveis.',
      link: 'https://alencar-bianca.github.io/contact-form/'
    },

  ]);

}
