import { Component } from '@angular/core';
import {StoreService} from '../service/store.service';

@Component({
  selector: 'xheader',
  template: `
      <div style="border:1px solid blue">头部组件
        <button (click)="changeValue()">点击</ button>
        <p>{{bool?"真的":"假的"}}</p>
      </div>

  `,
  styles:[`
      div{
        color:red
      }
    `]

})
export class XheaderComponent  {
  constructor(private StoreService:StoreService){
    this.bool  =true;
  }
  changeValue(){
    this.bool = !this.bool;
    this.StoreService.bool = this.bool;
  }
}
