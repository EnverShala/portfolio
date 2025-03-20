import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslatePipe, TranslateDirective],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss',
})
export class MyskillsComponent {
  skillIcons = [
    {
      img: './assets/img/skillIcons/HTML-Icon.png',
    },
    {
      img: './assets/img/skillIcons/CSS-Icon.png',
    },
    {
      img: './assets/img/skillIcons/JS-Icon.png',
    },
    {
      img: './assets/img/skillIcons/TS-Icon.png',
    },
    {
      img: './assets/img/skillIcons/Angular-Icon.png',
    },
    {
      img: './assets/img/skillIcons/firebase-Icon.png',
    },
    {
      img: './assets/img/skillIcons/GIT-Icon.png',
    },
    {
      img: './assets/img/skillIcons/rest-Api-Icon.png',
    },
    {
      img: './assets/img/skillIcons/scrum-Icon.png',
    },
    {
      img: './assets/img/skillIcons/material-design-Icon.png',
    },
    {
      img: './assets/img/skillIcons/learning-Icon.png',
    },
  ];
}
