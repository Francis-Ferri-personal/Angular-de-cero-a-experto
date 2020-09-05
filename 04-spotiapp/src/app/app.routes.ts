import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    {path: "home", component: HomeComponent},
    {path: "search", component: SearchComponent},
    // Cualquier path vacio me redirecciona a home
    {path: "", pathMatch:"full", redirectTo: "home"},
    // Cualquier otro path me redirecciona al home
    {path: "**", pathMatch:"full", redirectTo: "home"}
]