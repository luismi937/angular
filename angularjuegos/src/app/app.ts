import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a> |
      <a routerLink="/postfiles" routerLinkActive="active">Post Files</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App { }
