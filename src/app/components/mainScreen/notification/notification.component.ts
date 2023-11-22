// notification.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notification" [@slideInOut] *ngIf="isVisible">
      {{ message }}
    </div>
  `,
  styles: [`
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #4CAF50;
      color: white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  `],
})
export class NotificationComponent {
  @Input() message: string = '';
  @Input() isVisible: boolean = false;
}
