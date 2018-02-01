import { Component } from '@angular/core';
import { User } from './models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public user: User;
  public identity: boolean = true;
  public token;

  constructor () {
    this.user = new User();
  }

  guardar(forma: NgForm) {
    console.log("formulario posteado");
    console.log(forma);
    console.log(forma.value);
    console.log(this.user.email);
  }
}
