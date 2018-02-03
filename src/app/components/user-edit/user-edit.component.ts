import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  public titulo: string;
  public user: User;
  public identity;
  public token;
  public alertMessage;

  constructor(private _userService: UserService) {

    this.titulo = 'Actualizar Perfil';
    
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);

    this._userService.updateUser(this.user).subscribe(
      res => {
        
        if (!res.user) {
          this.alertMessage = 'El usuario no se ha actualizado';
        } else {
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.alertMessage = 'Actualización exitosa';
        }
      },
      err => {
        let alertMessage = <any>err;
        if (alertMessage) {
          let body = JSON.parse(err._body);
          this.alertMessage = body.message;
          console.error(alertMessage);
        }
      }
    );

  }

}
