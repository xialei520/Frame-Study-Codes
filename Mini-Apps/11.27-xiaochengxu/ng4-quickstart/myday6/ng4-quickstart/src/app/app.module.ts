import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
//导入服务
import {StoreService} from './service/store.service';
//导入头部组件
import {XheaderComponent} from './components/xheader.component';
import {XfooterComponent} from './components/xfooter.component';

//路由页面
import {HomeComponent} from './pages/home.component';
import {SettingComponent} from './pages/setting.component';


@NgModule({
  //内置服务
  imports:[ BrowserModule,RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'setting',
      component: SettingComponent
    }
  ])],
  //自定义组件
  declarations: [ AppComponent,XheaderComponent,XfooterComponent,HomeComponent,SettingComponent],
  providers: [StoreService],
  //根组件
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
