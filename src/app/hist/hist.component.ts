import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-hist',
  templateUrl: './hist.component.html',
  styleUrls: ['./hist.component.css']
})
export class HistComponent implements OnInit{
  uname:string='';
  uaccno:string='';
  payment:any;
  constructor(
    private route:ActivatedRoute,
    private paymentService:PaymentService,
    private router:Router){}

    ngOnInit(): void {
      this.uname=this.route.snapshot.params['uname'];
      this.uaccno=this.route.snapshot.params['uaccno'];
    this.get();

    }

    get(){
      this.paymentService.getPayments(this.uaccno).subscribe(data=>
        {
          this.payment=data;
          console.log(this.payment);

        });
    }

    back(){
      this.router.navigate(['/dashboard',this.uname,this.uaccno])
    }

}
