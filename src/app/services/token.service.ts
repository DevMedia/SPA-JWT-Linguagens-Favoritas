import { Injectable } from '@angular/core';

import { TOKEN_STORAGE } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  get token() {
    return localStorage.getItem(TOKEN_STORAGE);
  }

  set token(token: string) {
    localStorage.setItem(TOKEN_STORAGE, token);
  }

  resetarToken() {
    localStorage.removeItem(TOKEN_STORAGE);
  }
}
