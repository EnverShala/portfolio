import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateFunctionService } from '../../translate-function.service';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  changeLangGlob = inject(TranslateFunctionService);

  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
