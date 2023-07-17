import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Doctorslist } from '../doctorslist';

import { User } from '../user';
import { Userappoinment } from '../userappoinment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  baseUrl="http://localhost:8081/registration"
  deleteapp="http://localhost:8083/allapoint"
  bookUrl="http://localhost:8083/appointment"
 private baseUrlLogin="http://localhost:8081/registration/login"
 private allappo="http://localhost:8083/allappoint"
 doclistUrl="http://localhost:8082/doctList"
 private admin="http://localhost:8080/admin"
 detailurl="http://localhost:8083/detail/{id}"
 
  constructor(private httpClient:HttpClient) { }
  //user:User=new User
//   authenticate(username,password){
    
//     if(username==this.user.id && password==this.user.password)
//     return true
//     else return false
//   }

//   isUserLoginIn(){
// let users=sessionStorage.getItem('username')
// console.log(!(users==null))
// return !(users==null)
//   }
// logout(){
//   sessionStorage.removeItem('username')
// }

//for appointmentdelet
deleteAppoi( id: number): Observable<object> {
  return this.httpClient.delete(`${this.deleteapp}/delete/${id}`)
}

appdtails:any
 getAllDoctors():Observable<object>{
   
    
    return this.httpClient.get(this.doclistUrl)

  }
  getAllAppoint():Observable<object>{
   
    
    return this.httpClient.get(this.allappo)

  }
  getDetails():Observable<object>{
   
    
    return this.httpClient.get(this.detailurl)

  }

  registerUser(user:User):Observable<object>{
   
 
  
    return this.httpClient.post(this.baseUrl,user)

  }

  userAppointment(userappoin:Userappoinment):Observable<object>{
    console.log(userappoin)
 
    
    return this.httpClient.post(this.bookUrl,userappoin)

  }
  
  registerUserLogin(user:User):Observable<object>{
    console.log(user)
   
    //  user.password=this.httpClient.get(this.baseUrl,user.password)

    console.log("passing")
    return this.httpClient.post(this.baseUrlLogin,user)

  }
  // AdminLogin(user:User):Observable<object>{
  //   console.log(user)
   
  //   //  user.password=this.httpClient.get(this.baseUrl,user.password)

  //   console.log("passing")
  //  // if(user.id=="user" && user.password=="123456") 
  //   return this.httpClient.post(this.admin,user)
  //  // return this.httpClient.post(this.baseUrlLogin,user)

  // }

  setMsg(data: any){
    this.appdtails=data

  }
  getmsg(){
    return this.appdtails
  }

}
