import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../user-credentials';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string='';
  uaccno:string='';
  usercred: UserCredentials = new UserCredentials();
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}

  loginUser(){
    this.loginService.loginUser(this.usercred).subscribe(data=>{
      console.log(data);
      alert("Successfully Logged In")
      this.uname=this.usercred.username
      this.uaccno=this.usercred.accno
      this.router.navigate(['/dashboard',this.uname,this.uaccno])
    },
    error => {
      console.log(error);
      alert("Invalid Credentials")}
    );
  }
  onSubmit(){
    console.log(this.usercred);
    this.loginUser();
  }


}
