import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { PerfilComponent } from './pages/perfil/perfil.component';
import { GerenciarComponent } from './pages/perfil/gerenciar/gerenciar.component';


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
