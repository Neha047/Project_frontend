import { Component, OnInit } from '@angular/core';
import { Doctorslist } from 'src/app/doctorslist';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  public loading:boolean=false
  public doclist:any;
  public errormsg:string|null=null

  constructor(private regserv:RegistrationService) { }

  ngOnInit(): void {
this.loading=true
this.regserv.getAllDoctors().subscribe((data)=>{
  this.doclist=data;
console.log(this.doclist,"hii")
this.loading=false


},error=>{
this.errormsg=error;
this.loading=false
})

}
  }


