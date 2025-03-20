import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss',
})
export class LegalnoticeComponent {}
