import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }
}
