import { Component } from '@angular/core';
import { AxiosService } from './core/services/axios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pong-frontend';
  constructor(private axiosService: AxiosService) {
    this.axiosService.request(
      "GET",
      "/messages",
      []
    ).then(
      (response) => console.log(response.data)
    );
  }
}
