import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PrivacypolicyComponent } from './maincontent/privacypolicy/privacypolicy.component';
import { LegalnoticeComponent } from './maincontent/legalnotice/legalnotice.component';

export const routes: Routes = [
    {path: '', component: MaincontentComponent},
    {path: 'privacypolicy', component: PrivacypolicyComponent},
    {path: 'legalnotice', component: LegalnoticeComponent}
];
