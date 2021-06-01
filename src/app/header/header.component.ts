
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentComponentRoute:any = ''
  // @ViewChild('sidenav') public sidenav: MatSidenav;

  opened: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let currentComponent = window.location.href.split('/')[3];
    this.currentComponentRoute = currentComponent;
  }

  // clickHandler() {
  //   // this.sidenav.close();
  // }

  logOut(){
    this.router.navigate(["login"]);
  }

}
