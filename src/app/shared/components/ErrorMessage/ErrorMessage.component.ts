import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './ErrorMessage.component.html',
  styleUrls: ['./ErrorMessage.component.css']
})

export class ErrorMessageComponent {
  @Input() showError: boolean = false;
  @Input() errorMessage: string = '';
}
