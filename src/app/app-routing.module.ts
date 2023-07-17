import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddDoctorsComponent } from './components/add-doctors/add-doctors.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppoidetalsComponent } from './components/appoidetals/appoidetals.component';

import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocProfileComponent } from './components/doc-profile/doc-profile.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



const routes: Routes = [
  
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"login/admin",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"addDoct",
    component:AddDoctorsComponent,
    pathMatch:"full"
  },
  {
    path:"doctors",
    component:DoctorsComponent,
    pathMatch:"full"
  },
  {
    path:"docprofile",
    component:DocProfileComponent,
    pathMatch:"full"
  },
  {
    path:"user",
    component:UserProfileComponent,
    pathMatch:"full"
  },
  {
    path:"details",
    component:AppoidetalsComponent,
    pathMatch:"full"
  },
  {
    path:"about",
    component:AboutComponent,
    pathMatch:"full"
  },
  {
    path:"history",
    component:AppointmentHistoryComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"appointment",
    component:AppointmentComponent,
    pathMatch:"full"
  },
  {
    path:"appadmin",
    component:AdminComponent,
    pathMatch:"full"
  },
  {
    path:"",
    redirectTo:"home",
   
    pathMatch:"full"
  },


  {
    path:"signup",
    component:RegistrationComponent,
    pathMatch:"full"
  },
  {
    path:"contact",
    component:ContactComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
