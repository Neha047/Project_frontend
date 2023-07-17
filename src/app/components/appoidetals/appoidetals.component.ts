import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-appoidetals',
  templateUrl: './appoidetals.component.html',
  styleUrls: ['./appoidetals.component.css']
})
export class AppoidetalsComponent implements OnInit {

  constructor(private regserv:RegistrationService) { }
  public loading:boolean=false
  public userappoint:any;
  public errormsg:string|null=null
  ngOnInit(): void {
  }
  printDetails(){
    this.loading=true
this.regserv.getDetails().subscribe((data)=>{
  this.userappoint=data;
console.log(this.userappoint,"hii")
this.loading=false


},error=>{
this.errormsg=error;
this.loading=false
})
    window.print()
  }

}
