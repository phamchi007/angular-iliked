import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {enableProdMode} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

enableProdMode();

import { AppComponent } from './app.component';
import { PublicLoginComponent } from './public/login/login.component';
import { PublicHomeComponent } from './public/home/home.component';
import { PublicBaseHeaderComponent } from './public/base/header/header.component';
import { PublicBaseFooterComponent } from './public/base/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

const appRoutes: Routes = [ 
  { path: 'dang-nhap', component: PublicLoginComponent },
  { path: 'trang-chu', component: PublicHomeComponent },
  { path: '',   component: PublicHomeComponent },
  { path: '**', component: PublicHomeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PublicLoginComponent,
    PublicHomeComponent,
    PublicBaseHeaderComponent,
    PublicBaseFooterComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
