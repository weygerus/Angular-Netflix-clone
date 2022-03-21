import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GerenciarComponent } from './pages/perfil/gerenciar/gerenciar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'ManageProfiles',
    component: GerenciarComponent
  },
  {
    path: 'Browse',
    component: BrowseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
