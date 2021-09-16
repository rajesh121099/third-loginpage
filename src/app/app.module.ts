import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './signin/signin.component';
import { ForgetComponent } from './forget/forget.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BillingComponent } from './billing/billing.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ForgetComponent,
    SettingComponent,
    BillingComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule, MatInputModule,MatCardModule,FormsModule,MatButtonModule,MatIconModule,MatCardModule,MatButtonToggleModule,
     RouterModule.forRoot([
      {path:'',component:LoginComponent},
        {path:'Login',component:LoginComponent},
        {path:'Signin',component:SigninComponent},
        {path:'Forget',component:ForgetComponent},
        {path:'Setting',component:SettingComponent},
        {path:'Billing',component:BillingComponent },
        {path:'Account',component: AccountComponent},
    ])
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
