import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BalanceService } from '../balance.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  uname:string='';
  uaccno:string='';
  bal:any;
  LocalDate: String = new Date().toLocaleString();

  constructor(
    private route:ActivatedRoute,
    private balanceService:BalanceService,
    private router:Router){}
  ngOnInit(): void {
    this.uname=this.route.snapshot.params['uname'];
    this.uaccno=this.route.snapshot.params['uaccno'];
    this.balanceService.getBalance(this.uaccno).subscribe(data=>{
      console.log(data);
      this.bal=data
    })
  }

  deposit(){
    this.router.navigate(['/deposit',this.uname,this.uaccno])
  }
  withdraw(){
    this.router.navigate(['/withdraw',this.uname,this.uaccno])
  }
  payment(){
    this.router.navigate(['/payment',this.uname,this.uaccno])
  }

  transactionHis(){
    this.router.navigate(['/transaction-history',this.uname,this.uaccno])
  }

  depositHis(){
    this.router.navigate(['/deposit-history',this.uname,this.uaccno])
  }

  withdrawalHis(){
    this.router.navigate(['/withdrawal-history',this.uname,this.uaccno])
  }
}
