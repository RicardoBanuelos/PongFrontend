import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private authService: AuthService){}

  getUsername(): string | null {
    const token: string | null = this.authService.getToken();

    if(token === null)
      return null

    const decodedToken: any = jwtDecode(token);
    const issuer = decodedToken.iss;

    return issuer ? issuer : null;
  }
}
