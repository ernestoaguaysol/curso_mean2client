import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { GLOBAL } from "../../services/global";
import { UserService } from "../../services/user.service";
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styles: []
})
export class ArtistasComponent implements OnInit {

  public titulo: string;
  public artists: Artist[];
  public identity;
  public token;
  public url: string;

  constructor(private _userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.titulo = 'Artistas';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  }

}
