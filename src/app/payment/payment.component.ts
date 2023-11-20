import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransService } from '../trans.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  uname:string='';
  uaccno:string='';
  payment: Payment = new Payment() ;
  constructor(private route:ActivatedRoute,
    private paymentService: PaymentService, 
    private router: Router,
    private transDepositService:TransService) {}
  ngOnInit() {
    this.uname=this.route.snapshot.params['uname'];
    this.uaccno=this.route.snapshot.params['uaccno'];
  }

  paymentt(){
    this.paymentService.addPayment(this.payment).subscribe(data=>{
      console.log(data);
      alert("Payment successfuly made")
      this.trans();
      this.router.navigate(['/dashboard',this.uname,this.uaccno])
    },
    error => {
          console.log(error);
          alert("Payment cant be made")}
    );
  }
  onSubmit(){
    console.log(this.payment);
    this.paymentt();
  }

  trans(){
    this.transDepositService.paymentAmount(this.payment.accno,this.payment.amount).subscribe(data=>{
      console.log(data);
    })
  }
  back(){
    this.router.navigate(['/dashboard',this.uname,this.uaccno])
  }
}
