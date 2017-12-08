import { Component } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'xfooter',
  template: `<h1>底部组件  {{StoreService.bool}}</h1>`,
  styles:[`
    h1{
        border: 1px solid blue;
        color:blue;
    }
  `]
})
export class XfooterComponent  { 
  constructor(private StoreService:StoreService){
    console.log(StoreService)
  }
}