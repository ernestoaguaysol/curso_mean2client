import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

// Router
import { app_routing } from './app.routes';


// services and providers
import { UserService } from './services/user.service';

// Componentes and Pipes
import { AppComponent } from './app.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
