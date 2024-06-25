import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deafult-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './deafult-login-layout.component.html',
  styleUrl: './deafult-login-layout.component.scss',
})
export class DeafultLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtn: string = '';
  @Input() secondaryBtn: string = '';
  @Input() disablePrimaryButton: boolean = true;
  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
