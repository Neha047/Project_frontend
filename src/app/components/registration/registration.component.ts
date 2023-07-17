import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/user';
import { NgModule } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  constructor(private registerservice:RegistrationService) { }
 
  user:User=new User();
  // data={
  //   last:""
  // }
  ngOnInit(): void {
  }
 
  userRegister() {
    console.log(this.user,"this.user")
    
    this.registerservice.registerUser(this.user).subscribe(data=>{
      if(this.user.age!=0 && this.user.contact!=null && this.user.password !="" && this.user.name !=null && this.user.email !="" && this.user.username!=""){
    
      alert("user successfully register")
    
     this.user.cpassword='';
     this.user.email='';
     this.user.name='';
     this.user.password=''
     this.user.age=0
     this.user.contact=0
    //  this.user.username=''
      }
      else{
        alert("please enter all fields")
      }
      
    },error=>alert("sorry"))
    console.log("User not Submited ")
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}

