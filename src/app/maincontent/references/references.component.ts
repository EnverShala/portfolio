import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateFunctionService } from '../translate-function.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {

  changeLangGlob = inject(TranslateFunctionService);

  refencesEn = [
    {
      name: 'Emre Isik',
      reference: `I worked with Enver for a long time on the Join project. He was essentially the JS expert on the team. He has an extremely structured, personable, and kind demeanor. That was noticeable from the very first minutes. As quick as he was, he was also focused and determined. He always offered his help and explained and shared his extremely good JS code with us. I really enjoyed working with Enver. He's someone you would always want in a group project.`,
      picture: "./assets/img/references/emreIsik.png"
    },
  ];

  refencesDe = [
    {
      name: 'Emre Isik',
      reference: `Mit Enver habe ich lange am Join-Projekt zusammengearbeitet. Er war quasi der JS-Experte im Team. Er hat eine extrem strukturierte, sympathische und nette Art. Das konnte man ihm schon in den ersten Minuten anmerken. So schnell er auch war, so konzentriert und zielstrebig war er ebenfalls. Er hat immer seine Hilfe angeboten und uns seinen extrem guten JS-Code erklärt und nähergebracht. Ich habe sehr gerne mit Enver zusammengearbeitet. Er ist jemand, den man sich immer in einer Gruppenarbeit wünschen würde.`,
      picture: "./assets/img/references/emreIsik.png"
    },
  ];

  currentIndex = 0;

  previousReference() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.refencesEn.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.refencesEn.length;
    document.getElementById;
  }

  getEllipseSrc(index: number) {
    if (this.currentIndex === index) {
      return '/assets/img/references/ellipseActive.png';
    } else {
      return './assets/img/references/ellipseInactive.png';
    }
  }
}
