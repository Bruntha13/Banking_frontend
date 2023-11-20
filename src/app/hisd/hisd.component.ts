import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepositService } from '../deposit.service';
import { Deposit } from '../deposit';

@Component({
  selector: 'app-hisd',
  templateUrl: './hisd.component.html',
  styleUrls: ['./hisd.component.css']
})
export class HisdComponent implements OnInit{
  uname:string='';
  uaccno:string='';
 deposit:any;
  constructor(
    private route:ActivatedRoute,
    private depositService:DepositService,
    private router:Router){}

  ngOnInit(): void {

    this.uname=this.route.snapshot.params['uname'];
    this.uaccno=this.route.snapshot.params['uaccno'];

    this.depositService.getDeposits(this.uaccno).subscribe(data=>
      {
        this.deposit=data;
        console.log(this.deposit);
      });

  }
  back(){
    this.router.navigate(['/dashboard',this.uname,this.uaccno])
  }
}
