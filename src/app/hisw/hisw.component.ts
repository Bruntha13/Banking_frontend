import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Withdraw } from '../withdraw';
import { WithdrawService } from '../withdraw.service';

@Component({
  selector: 'app-hisw',
  templateUrl: './hisw.component.html',
  styleUrls: ['./hisw.component.css']
})
export class HiswComponent implements OnInit{
  uname:string='';
  uaccno:string='';
//  withdraw : Withdraw=new Withdraw();
  withdraw:any;
  constructor(
    private route:ActivatedRoute,
    private withdrawService:WithdrawService,
    private router:Router){}

    ngOnInit(): void {
      this.uname=this.route.snapshot.params['uname'];
      this.uaccno=this.route.snapshot.params['uaccno'];
    this.get();

    }

    get(){
      this.withdrawService.getWithdrawal(this.uaccno).subscribe(data=>
        {
          this.withdraw=data;
          console.log(this.withdraw);

        });
    }

    back(){
      this.router.navigate(['/dashboard',this.uname,this.uaccno])
    }
  
}
