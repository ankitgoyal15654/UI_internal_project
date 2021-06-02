import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;
  formSubmitAttempt:boolean = false;
  invalidLogin: boolean = false;

  constructor( private fb: FormBuilder, private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [ '', Validators.compose([Validators.required,Validators.email])],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit(): void {
    if (
      this.loginForm.get('username').value.length &&
      this.loginForm.get('password').value.length
    ) {
      const formValue = this.loginForm.value;
      console.log(formValue);

      this.userAuthService.login(formValue.username, formValue.password)
        .subscribe((data) => {
            console.log('login data', data);
            this.router.navigate(["home"]);
            this.invalidLogin = false;
          },(error) => {
            console.log(error);
            this.invalidLogin = true;
          }
        );
    }
  }

}
