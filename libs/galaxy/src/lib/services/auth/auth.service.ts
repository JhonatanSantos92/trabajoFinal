import { Injectable } from '@angular/core';
import { GlxAuthModule } from './auth.module';
import { of } from 'rxjs';

@Injectable({
    providedIn: GlxAuthModule
  })
  export class AuthService {

    constructor() { }

    signIn() {
      return of('BQCbUM1FcKuofljmZRpP2hOUMjMvo2U8prvaQ8rVmp1xh8qs-_wG8UuFBwkmpExncQjlU7VhO82SmJ7ANEA');
    }
  }
