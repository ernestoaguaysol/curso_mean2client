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
  public user_register: User;
  public identity: any;
  public token;
  public errorMessage;

  constructor ( private _userService: UserService ) {
    this.user = new User();
    this.user_register = new User();
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
  }

  public onSubmitLogin() {

    //conseguir los datos del usuario identificado
    this._userService.singup(this.user).subscribe(
    response => {
      let identity = response.user;
      this.identity = identity;

      if (!this.identity._id) {
        alert('El usuario no está correctamente identificado');
      } else {
        // crea elemento en local storage para tener el usuario sesion
        localStorage.setItem('identity', JSON.stringify(identity));

        //conseguir el token para enviar en cada peticion http
        this._userService.singup(this.user, 'true').subscribe(
          response => {
            let token = response.token;
            this.token = token;
      
            if (this.token.length <= 0) {
              alert('El token no se ha generado');
            } else {
              // local storage para token
              localStorage.setItem('token', token);
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
  }

  public logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.user = new User();
  }

  public onSubmitRegister() {
    console.log(this.user_register);

    this._userService.register(this.user_register)
      .subscribe(
        res => {
          let user = res.user;
          this.user_register = user;

          if (!this.user_register._id) {
            alert('Error al registrarse');
          } else {
            console.log('registrado correctamete ', this.user_register);
            this.user_register = new User();
          }
        },
        err => {
          let errorMessage = <any>err;
          if (errorMessage) {
            let body = JSON.parse(err._body);
            this.errorMessage = body.message;
            console.error(errorMessage);
          }
        }
      );
  }
}
