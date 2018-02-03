import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

// Router
import { app_routing } from './app.routes';


// services and providers
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';

// Componentes and Pipes
import { AppComponent } from './app.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PerfilComponent } from './components/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    NavbarComponent,
    LoginComponent,
    BuscarComponent,
    ArtistasComponent,
    AlbumsComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    UserService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
