import { NgModule } from '@angular/core';
// 浏览器服务的功能
import { BrowserModule } from '@angular/platform-browser';
// 路由服务的功能
import { RouterModule } from '@angular/router';
// http服务
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
// 导入服务
import { StoreService } from './service/store.service';
// 自定义组件
import { XheaderComponent } from './components/xheader.component';
import { XfooterComponent } from './components/xfooter.component';

// 路由页面
import { HomeComponent } from './pages/home.component';
import { SettingComponent } from './pages/setting.component';

// Vuex
@NgModule({
  // 内置服务
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'setting',
      component: SettingComponent
    }
  ]), HttpModule],
  // 自定义组件
  declarations: [AppComponent, XheaderComponent, XfooterComponent, HomeComponent, SettingComponent],
  // 自定义服务
  providers: [StoreService],
  // 根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
