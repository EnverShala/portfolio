import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomepageComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
