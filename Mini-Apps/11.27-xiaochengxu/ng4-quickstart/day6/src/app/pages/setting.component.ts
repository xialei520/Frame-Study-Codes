import { Component } from '@angular/core';

@Component({
  selector: 'setting',
  template: `
    <p>设置页面</p>
  `,
})
export class SettingComponent  { 
    constructor(){
        console.log(this.http)
        this.http
    }
}
