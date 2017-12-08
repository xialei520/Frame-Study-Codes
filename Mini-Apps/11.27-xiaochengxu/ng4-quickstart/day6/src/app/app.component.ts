import { Component } from '@angular/core';
import { StoreService } from './service/store.service';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/home">home</a>
    <a routerLink="/setting">setting</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 
  constructor(private StoreService:StoreService){
    console.log(StoreService.getName())
  }
}
