import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public _userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    // this.identity = null;
    // this.token = null;
    // this.user = new User();
    this.router.navigate(['/login-register']);
  }

}
