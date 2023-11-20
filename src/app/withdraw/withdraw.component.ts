import { Component, OnInit } from '@angular/core';
import { Withdraw } from '../withdraw';
import { WithdrawService } from '../withdraw.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit{
  uname:string='';
  uaccno:string='';
  withdraw: Withdraw = new Withdraw() ;
  constructor( private route:ActivatedRoute,
    private withdrawService: WithdrawService, 
    private router: Router,
    private transDepositService:TransService) {}
  ngOnInit() {
    this.uname=this.route.snapshot.params['uname'];
    this.uaccno=this.route.snapshot.params['uaccno'];
  }

  withdraww(){
    this.withdrawService.addWithdrawal(this.withdraw).subscribe(data=>{
      console.log(data);
      alert("Successfully Withdrawed")
      this.trans();
      this.router.navigate(['/dashboard',this.uname,this.uaccno])
    },
    error => {
          console.log(error);
          alert("Withdraw cant be made")}
    );
  }
  onSubmit(){
    console.log(this.withdraw);
    this.withdraww();
  }

  trans(){
    this.transDepositService.withdrawAmount(this.withdraw.accno,this.withdraw.amount).subscribe(data=>{
      console.log(data);
    })
  }
  back(){
    this.router.navigate(['/dashboard',this.uname,this.uaccno])
  }
}
