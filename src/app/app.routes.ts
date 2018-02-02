import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'login-register', component: LoginComponent },
    { path: 'user-edit', component: UserEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login-register' },

];

export const app_routing = RouterModule.forRoot(routes);
