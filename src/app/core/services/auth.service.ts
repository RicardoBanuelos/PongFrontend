import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = 'authToken';

  setToken(token: string | null) {
    if(token)
      localStorage.setItem(this.tokenKey, token);
    else
      localStorage.removeItem(this.tokenKey)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUsername(): string | null {
    const token: string |null = this.getToken();
    return token ? "TODO: Decode Token" : null;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
