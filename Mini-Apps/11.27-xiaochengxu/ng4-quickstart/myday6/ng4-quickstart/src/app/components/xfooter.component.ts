import { Component } from '@angular/core';
import {StoreService} from '../service/store.service';

@Component({
  selector: 'xfooter',
  template: `
    <div style="border:1px solid red">底部组件
      <p>{{StoreService.bool}}</p>
    </div>

  `,
  styles:[`
      div{
        color:blue
      }
    `]

})
export class XfooterComponent  {
  constructor(private StoreService:StoreService){

  }
}
