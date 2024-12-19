import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'standard', component: CalculatorComponent },
    { path: 'standard/:id', component: CalculatorComponent },
    { path: '', redirectTo: '/standard', pathMatch: 'full' },
    { path: '', redirectTo: '/standard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
