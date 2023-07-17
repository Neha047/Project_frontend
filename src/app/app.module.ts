import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';


import {NgxPrintModule} from 'ngx-print';


import {enableProdMode} from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DocProfileComponent } from './components/doc-profile/doc-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { UpfooterComponent } from './components/upfooter/upfooter.component';
import { AppoidetalsComponent } from './components/appoidetals/appoidetals.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddDoctorsComponent } from './components/add-doctors/add-doctors.component';








enableProdMode();


@NgModule({
  declarations: [
    AppComponent,
   
    RegistrationComponent,
  
   
    
    
         LoginComponent,
         ContactComponent,
         HomeComponent,
         NavbarComponent,
         DoctorsComponent,
         DocProfileComponent,
         FooterComponent,
         AppointmentComponent,
         UserProfileComponent,
         AppointmentHistoryComponent,
         AboutComponent,
         UpfooterComponent,
        
         AppoidetalsComponent,
         AdminComponent,
         AddDoctorsComponent,
    
   

         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    NgxPrintModule,
    HttpClientModule
    
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
