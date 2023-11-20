import { Component, OnInit } from '@angular/core';
import { Deposit } from '../deposit';
import { DepositService } from '../deposit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  uname:string='';
  uaccno:string='';
  deposit: Deposit = new Deposit() ;
  constructor(private route:ActivatedRoute,
    private depositService: DepositService, 
    private router: Router,
    private transDepositService:TransService) {}
  ngOnInit() {
    this.uname=this.route.snapshot.params['uname'];
    this.uaccno=this.route.snapshot.params['uaccno'];
  }

  depositt(){
    this.depositService.addDeposit(this.deposit).subscribe(data=>{
      console.log(data);
      alert("Successfully Depositted")
      this.trans();
      this.router.navigate(['/dashboard',this.uname,this.uaccno])

    },
    error => {
          console.log(error);
          alert("Deposit cant be made")}
    );
  }
  onSubmit(){
    console.log(this.deposit);
    this.depositt();
  }
  trans(){
    this.transDepositService.depositAmount(this.deposit.accno,this.deposit.amount).subscribe(data=>{
      console.log(data);
    })
  }

  back(){
    this.router.navigate(['/dashboard',this.uname,this.uaccno])
  }
}
