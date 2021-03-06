import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core
import { LoginComponent } from './core/auth/login/login.component';

// Pages 
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { GerenciarComponent } from './pages/perfil/gerenciar/gerenciar.component';

// Shared
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BgVideosComponent } from './shared/components/bg-videos/bg-videos.component';
import { CarouselsComponent } from './shared/components/carousels/carousels.component';

// Sections (Menu)
import { InicioComponent } from './pages/sections/inicio/inicio.component';
import { SeriesComponent } from './pages/sections/series/series.component';
import { FilmesComponent } from './pages/sections/filmes/filmes.component';
import { BombandoComponent } from './pages/sections/bombando/bombando.component';
import { MinhaListaComponent } from './pages/sections/minha-lista/minha-lista.component';

// Modulos externos
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    PerfilComponent,
    GerenciarComponent,
    HomeComponent,
    FooterComponent,
    BgVideosComponent,
    CarouselsComponent,
    InicioComponent,
    SeriesComponent,
    FilmesComponent,
    BombandoComponent,
    MinhaListaComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    SlickCarouselModule
    ],
  providers: [ 
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
