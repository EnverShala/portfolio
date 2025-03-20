import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { HeaderComponent } from '../shared/header/header.component';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, TranslatePipe, TranslateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('sendPopUpID') sendPopUpID!: ElementRef;
  @ViewChild('privacySpan') privacySpan!: ElementRef;

  http = inject(HttpClient);

  checked() {
    this.contactData.checkbox = true;
  }

  checkPrivacy() {
    this.privacySpan.nativeElement.style.display = 'block';
  }

  scrollToHomepage() {
    window.scrollBy({ top: -10000, behavior: 'smooth' });
  }

  sendPostPopUp() {
    let displayStyle = 'none';
    this.sendPopUpID.nativeElement.style.display = displayStyle = 'flex';
  }

  closePopUp() {
    let displayStyle = 'block';
    this.sendPopUpID.nativeElement.style.display = displayStyle = 'none';
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://enver-shala.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (this.contactData.checkbox == true) {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => this.sendPostPopUp(),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        ngForm.resetForm();
      }
    }
  }
}
