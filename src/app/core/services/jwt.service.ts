import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private authService: AuthService){}

  expired(): boolean {
    const token: string | null = this.authService.getToken();
    if(token === null)
      return true;

    const decoded = jwtDecode(token);
    return decoded.exp! * 1000 < Date.now();
  }

  getUsername(): string | null {
    const token: string | null = this.authService.getToken();

    if(token === null)
      return null

    const decodedToken: any = jwtDecode(token);
    const issuer = decodedToken.iss;

    return issuer ? issuer : null;
  }
}
