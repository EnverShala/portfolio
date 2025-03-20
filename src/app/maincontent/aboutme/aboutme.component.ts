import { Component } from '@angular/core';
import 'aos/dist/aos.css';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {}
