import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslatePipe, TranslateDirective],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})

export class HomepageComponent {}
