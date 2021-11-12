import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer : UsersService , public myRouter : Router) { }

  ngOnInit(): void {
  }

  doLogout()
  {
    localStorage.clear();
    this.myRouter.navigateByUrl("/");
  }
}
