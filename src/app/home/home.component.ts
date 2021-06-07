import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  roleUserData:any;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    let roleUserGetData:any = localStorage.getItem('roleUserInfo');
    this.roleUserData= JSON.parse(roleUserGetData);
    // console.log('roleUserData', this.roleUserData);
  }
  
  ngAfterViewInit(){

  }

}
