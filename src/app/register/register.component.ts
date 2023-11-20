import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  user:User=new User();
  constructor(private registerService:RegisterService,
    private router:Router){}

  ngOnInit(): void {}

  registerUser(){
    this.registerService.registerUser(this.user).subscribe(data=>{
      console.log(data);
      alert("Successfully Registered")
      this.router.navigate(['login'])
    },
    error => {
      console.log(error);
      alert("Invalid Credentials")}
    );
  }

  onSubmit(){
    console.log(this.user);
    this.registerUser();
  }

}
