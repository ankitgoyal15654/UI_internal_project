
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentComponentRoute:any = ''
  // @ViewChild('sidenav') public sidenav: MatSidenav;

  opened: boolean = true;
  roleUserData:any;

  constructor(private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    let currentComponent = window.location.href.split('/')[3];
    this.currentComponentRoute = currentComponent;

    let roleUserGetData:any = localStorage.getItem('roleUserInfo');
    this.roleUserData= JSON.parse(roleUserGetData);
    // console.log('roleUserData', this.roleUserData);
    
  }

  // clickHandler() {
  //   // this.sidenav.close();
  // }

  logOut(){
    this.router.navigate(['']);
    this.userAuthService.logout();
  }

}
