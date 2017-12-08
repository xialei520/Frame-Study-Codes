import { Component } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
    selector: 'xheader',
    template: `
    <div>
        <h1>头部组件</h1>
        <button (click)="changeValue()">OK</button>
        <p>{{bool?"真的":"假的"}}</p>
    </div>
`,
    styles: [`
    div{
        border: 1px solid red;
        color: red;
    }
  `]
})

export class XheaderComponent {
    bool: boolean;
    constructor(private StoreService: StoreService) {
        // M
        // data
        this.bool = true;
        console.log(StoreService.getName())
    }
    // methods
    changeValue() {
        this.bool = !this.bool
        console.log(this.StoreService)
        this.StoreService.bool = this.bool
    }
}