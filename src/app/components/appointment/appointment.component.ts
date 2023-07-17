import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctorslist } from 'src/app/doctorslist';

import { Userappoinment } from 'src/app/userappoinment';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  userappoin:Userappoinment=new Userappoinment
  doctorlist: Doctorslist[]=[];

  constructor(private registerservice:RegistrationService, public router:Router) { }

  ngOnInit(): void {
    
  }
  appointment(){
    console.log(this.userappoin)
    
    this.registerservice.userAppointment(this.userappoin).subscribe(data=>{
      if(this.userappoin.contact!=null && this.userappoin.date != null && this.userappoin.email!="" && this.userappoin.name!="" && this.userappoin.message!=""){
     
      alert("book appointment successfully");
     window.print();
      }
      else
      {
        alert("Please enter all fields")
      }
     
//this.sendtonext();
    //  this.userappoin.cpassword='';
    //  this.user.email='';
    //  this.user.name='';
    //  this.user.password=''
    //  this.user.age=0
    //  this.user.contact=0
   
   // this.router.navigate(['details'])
    },error=>alert("sorry"))
    console.log("User not Submited ")
  }
  printData(){
    window.print();
  }

  // sendtonext(){
  //  form.resetForm();
  // }
}
