import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { GLOBAL } from "../../services/global";

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
  public fileToUpload: Array<File>;
  public url: string;

  constructor(private _userService: UserService) {

    this.titulo = 'Actualizar Perfil';
    
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
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
          
          if(!this.fileToUpload) {
            // redireccion
            this.alertMessage = 'No se ha actualizado la imagen';
          } else {
            this.makeFileRequest(`${this.url}upload-image-user/${this.user._id}`, [], this.fileToUpload).then(
              (result: any) => {
                this.user.image = result.image;
                localStorage.setItem('identity', JSON.stringify(this.user));
                this.alertMessage = 'Actualización exitosa';
              }
            );
          }
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

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <Array<File>>fileInput.target.files;
    console.log(this.fileToUpload);
    
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    let token = this.token;
    return new Promise(
     (resolve, reject) => {
       let formData: any = new FormData();
       let xhr = new XMLHttpRequest();
       
        for (let i = 0; i < files.length; i++) {
         formData.append('image', files[i], files[i].name );
        }

        xhr.onreadystatechange =  () => {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
          }
        }

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Authorization', token);
        xhr.send(formData);
      } 
    );
  }

}
