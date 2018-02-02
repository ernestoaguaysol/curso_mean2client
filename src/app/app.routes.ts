import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'user-edit', component: UserEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'app' },

];

export const app_routing = RouterModule.forRoot(routes);
