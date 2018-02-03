import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PerfilComponent } from './components/perfil/perfil.component';

// Auth Guard
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'login-register', component: LoginComponent },
    { path: 'artistas', component: ArtistasComponent, canActivate: [ AuthGuardService ]},
    { path: 'albums', component: AlbumsComponent , canActivate: [ AuthGuardService ]},
    { path: 'buscar', component: BuscarComponent , canActivate: [ AuthGuardService ]},
    { path: 'perfil', component: PerfilComponent , canActivate: [ AuthGuardService ]},
    { path: 'user-edit', component: UserEditComponent , canActivate: [ AuthGuardService ]},
    { path: '**', pathMatch: 'full', redirectTo: 'login-register' },

];

export const app_routing = RouterModule.forRoot(routes);
