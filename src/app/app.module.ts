import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PaymentComponent } from './payment/payment.component';
import { HiswComponent } from './hisw/hisw.component';
import { HisdComponent } from './hisd/hisd.component';
import { HistComponent } from './hist/hist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AboutusComponent,
    RegisterComponent,
    DashboardComponent,
    DepositComponent,
    WithdrawComponent,
    PaymentComponent,
    HiswComponent,
    HisdComponent,
    HistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
