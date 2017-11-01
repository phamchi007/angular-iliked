import { BrowserModule } from '@angular/platform-browser';
import { NgModule , enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

enableProdMode();

import { AppComponent } from './app.component';
import { PublicLoginComponent } from './public/login/login.component';
import { PublicHomeComponent } from './public/home/home.component';
import { PublicBaseHeaderComponent } from './public/base/header/header.component';
import { PublicBaseMenuComponent } from './public/base/menu/menu.component';
import { PublicBaseFooterComponent } from './public/base/footer/footer.component';

import { PublicMemberComponent } from './public/member/member.component';


const appRoutes: Routes = [ 
  { path: 'dang-nhap', component: PublicLoginComponent },
  { path: 'trang-chu', component: PublicHomeComponent },
  { path: 'thanh-vien', component: PublicMemberComponent },
  { path: '',   component: PublicHomeComponent },
  { path: '**', component: PublicHomeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PublicLoginComponent,
    PublicHomeComponent,
    PublicBaseHeaderComponent,
    PublicBaseMenuComponent,
    PublicBaseFooterComponent,
    PublicMemberComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
