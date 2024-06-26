import { Component } from '@angular/core';
import { InfoPersonComponent } from '../components/info-person/info-person.component';
import { IconsLinkComponent } from '../components/icons-link/icons-link.component';



@Component({
  selector: 'app-menu-info-me',
  standalone: true,
  imports: [InfoPersonComponent, IconsLinkComponent],
  templateUrl: './menu-info-me.component.html',
  styleUrl: './menu-info-me.component.scss'
})
export class MenuInfoMeComponent {

}
