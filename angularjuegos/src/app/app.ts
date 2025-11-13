import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a> |
      <a routerLink="/postfiles" routerLinkActive="active">Post Files</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { margin-bottom: 20px; }
    a { margin-right: 10px; text-decoration: none; }
    a.active { font-weight: bold; color: blue; }
  `]
})
export class App { }
