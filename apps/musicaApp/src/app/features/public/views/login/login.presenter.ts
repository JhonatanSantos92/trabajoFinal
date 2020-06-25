import { Router } from '@angular/router';
import { AuthService } from '@galaxy/commons/services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginPresenter {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  signIn() {
    this.auth.signIn()
    .subscribe(
      token => {
        sessionStorage.setItem('token', token);
        this.router.navigateByUrl('/spotify');
      }
    );
  }

}
