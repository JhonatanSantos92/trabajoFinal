import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PortalPresenter {

  constructor(
    private router: Router
  ) { }

  closeSession() {
    this.router.navigateByUrl('/');
  }
}
