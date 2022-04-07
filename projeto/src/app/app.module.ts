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
import { BrowseComponent } from './pages/browse/browse.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    PerfilComponent,
    GerenciarComponent,
    HomeComponent,
    BrowseComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
