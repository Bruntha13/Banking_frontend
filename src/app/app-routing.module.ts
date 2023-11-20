import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PaymentComponent } from './payment/payment.component';
import { HiswComponent } from './hisw/hisw.component';
import { HisdComponent } from './hisd/hisd.component';
import { HistComponent } from './hist/hist.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component:AboutusComponent},
  { path: 'deposit/:uname/:uaccno', component:DepositComponent},
  { path: 'withdraw/:uname/:uaccno', component:WithdrawComponent},
  { path: 'payment/:uname/:uaccno', component:PaymentComponent},
  { path: 'dashboard/:uname/:uaccno', component: DashboardComponent },
  { path: 'withdrawal-history/:uname/:uaccno', component:HiswComponent},
  { path: 'deposit-history/:uname/:uaccno', component:HisdComponent},
  { path: 'transaction-history/:uname/:uaccno', component:HistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
