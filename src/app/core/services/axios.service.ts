import { Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AxiosService {

  constructor(private authService: AuthService) {
    axios.defaults.baseURL= "http://localhost:8080"
    axios.defaults.headers.post["Content-Type"] = 'application/json'
  }

  request(method: string, url: string, data: any): Promise<any> {
    let headers = {};

    const token: string | null = this.authService.getToken()
    if(token !== null) {
      headers = {
        "Authorization" : "Bearer " + token
      };
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }
}
