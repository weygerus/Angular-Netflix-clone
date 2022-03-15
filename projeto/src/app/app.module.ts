import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { LoginComponent } from './core/auth/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { GerenciarComponent } from './pages/perfil/gerenciar/gerenciar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    PerfilComponent,
    GerenciarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
