import { Component } from '@angular/core';
import {StoreService} from './service/store.service';



@Component({
  selector: 'my-app',
  template: `
  <a routerLink="/home">首页</a>
  <a routerLink="/setting">设置</a>

  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  name = 'Angular';
  constructor(private StoreService:StoreService){
    console.log(StoreService);
  }
}
