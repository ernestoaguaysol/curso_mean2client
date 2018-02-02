import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
    { path: 'login-register', component: LoginComponent },
    { path: 'artistas', component: ArtistasComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'user-edit', component: UserEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login-register' },

];

export const app_routing = RouterModule.forRoot(routes);
