import { Component, OnInit } from '@angular/core';
import { Userappoinment } from 'src/app/userappoinment';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public loading:boolean=false
  public doclist:any;
  public errormsg:string|null=null
  appoint:any
  constructor(private regserv:RegistrationService) { }
 
  ngOnInit(): void {
    this. getAllDoctors()
  }
  getAllDoctors(){

    
      this.regserv.getAllAppoint().subscribe(data => {
        this.appoint= data;
      });
    
    // this.loading=true
    // this.regserv.getAllAppoint().subscribe((data)=>{
    //   this.appoint=data;
    // console.log(this.doclist,"hii")
    // this.loading=false
    
    
    // },error=>{
    // this.errormsg=error;
    // this.loading=false
    // })
  }
  
  deleteAppoi(id: number){
    this.regserv.deleteAppoi(id).subscribe( data => {
      console.log(data);
      this. getAllDoctors();
    })
  }
//   deleteAppoi(id:number){
//   this.regserv.deleteApp(id).subscribe(()=>{
//     // this.appoint=data;
// console.log(this.doclist,"hii")
// //this.loading=false

//   },error=>{
//     this.errormsg=error;
//     this.loading=false
//     })
// }
}
