import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@galaxy/commons/services/auth/auth.service';
import { LoginPresenter } from './login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss'],
  providers: [ LoginPresenter ]
})
export class LoginView implements OnInit {

  constructor(
    public presenter: LoginPresenter) { }

  ngOnInit(): void {
    
  }
}
