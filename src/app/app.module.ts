import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

// services and providers
import { UserService } from './services/user.service';

// Componentes and Pipes
import { AppComponent } from './app.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
