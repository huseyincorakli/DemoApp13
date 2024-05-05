import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storages',
  standalone: true,
  imports: [],
  template: `
    Storages <br />
    <button (click)="setSession()">Set Session Storage</button>
    <button (click)="getSession()">Get Session Stoage</button>
    <button (click)="setCokie()">Set Cookie</button>
    <button (click)="getCookie()">Get Cookie</button>
    <button (click)="clearCookie()">Clear Cookie</button>
  `,
})
export class StoragesComponent {
  cookieService = inject(CookieService);

  clearCookie() {
    this.cookieService.deleteAll();
  }
  getCookie() {
    alert(this.cookieService.get('example'));
  }
  setSession() {
    sessionStorage.setItem('name', 'hüseyin');
  }
  setCokie() {
    this.cookieService.set('example', '123');
  }
  getSession() {
    alert(sessionStorage.getItem('name'));
  }
}
