import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string=''
 pass:string=''
 role:string=''
//  roles:string[];
  constructor(private registerservice:RegistrationService,public router:Router) {
    // this.roles[
    //   'admin',
    //   'user'
    // ]
   }

 user1:User=new User
 
  ngOnInit(): void {
    
  }
  // LoginAsAdmin(){
    

  //   this.registerservice.AdminLogin(this.user1).subscribe(data=>{
  //  //   if(this.user1.id=="user" && this.pass=="123456")
  //     alert("admin successfully login")
     
     
      
  //   },error=>alert("Sorry..pls enter correct id and password"))
  //   console.log("try...")


  // }
  Login(){
    console.log("working"+this.user1)
  
    this.registerservice.registerUserLogin(this.user1).subscribe(data=>{
     
      alert("user successfully login")
this.router.navigate(['appointment'])
     
      
    },error=>alert("Sorry..pls enter correct id and password"))
    console.log("try...")

  }
}
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
export class FormFieldPrefixSuffixExample {
  hide = true;
}
