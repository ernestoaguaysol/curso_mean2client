import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { NgForm } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  public user: User;
  public identity: any;
  public token;
  public errorMessage;

  constructor ( private _userService: UserService ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    // console.log("formulario posteado");
    // console.log(forma);
    // console.log(forma.value);
    // console.log(this.user.email);

    //conseguir los datos del usuario identificado
    this._userService.singup(this.user).subscribe(
    response => {
      console.log(response);
      let identity = response.user;
      this.identity = identity;

      if (!this.identity._id) {
        alert('El usuario no está correctamente identificado');
      } else {
        // local storage sesion
        //conseguir los datos del usuario identificado
    this._userService.singup(this.user).subscribe(
    response => {
      console.log(response);
      let identity = response.user;
      this.identity = identity;

      if (!this.identity._id) {
        alert('El usuario no está correctamente identificado');
      } else {
        // local storage sesion

        // conseguir token del user

        //conseguir los datos del usuario identificado
        this._userService.singup(this.user, 'true').subscribe(
          response => {
            console.log(response);
            let token = response.token;
            this.token = token;
      
            if (this.token.length <= 0) {
              alert('El token no se ha generado');
            } else {
              // local storage para token
      
              console.log(token);
              console.log(identity);
            }
          },
          error => {
            let errorMessage = <any>error;
            if (errorMessage) {
              let body = JSON.parse(error._body);
              this.errorMessage = body.message;
              console.error(errorMessage);
            }
          });
          }
        },
        error => {
          let errorMessage = <any>error;
          if (errorMessage) {
            let body = JSON.parse(error._body);
            this.errorMessage = body.message;
            console.error(errorMessage);
          }
        });
        // conseguir token del user
      }
    },
    error => {
      let errorMessage = <any>error;
      if (errorMessage) {
        let body = JSON.parse(error._body);
        this.errorMessage = body.message;
        console.error(errorMessage);
      }
    });
  }
}
