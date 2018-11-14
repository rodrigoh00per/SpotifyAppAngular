import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from "./components/home/home.component";
import { ArtistaComponent } from "./components/artista/artista.component";
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artista', component: ArtistaComponent },
    { path:'search',component:SearchComponent},
    {path:'artist/:id',component:ArtistaComponent},
    { path: '', pathMatch:'full', redirectTo: 'home' },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING:ModuleWithProviders = RouterModule.forRoot(routes,{useHash:true});