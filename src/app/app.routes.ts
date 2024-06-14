import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharectresComponent } from './pages/charectres/charectres.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

export const routes: Routes = [
    { 'path': '', 'title': 'Home', component: HomeComponent },
    { 'path': 'charecters', 'title': 'Characters', component: CharectresComponent },
    { 'path': 'charecters/:id', 'title': 'Character Details',component: CharacterDetailsComponent },
    { 'path': '**', 'title': 'Page Not Found', component: PageNotFoundComponent }
];

