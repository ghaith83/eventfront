import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SallesComponent } from './salles/salles.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { LoginComponent } from './login/login.component';
import { ClientService } from './client/client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalleService } from './salles/salle.service';
import { FooterComponent } from './footer/footer.component';
import { FindIdSalleComponent } from './find-id-salle/find-id-salle.component';
import { HeaderuserComponent } from './headeruser/headeruser.component';
import { PlaningComponent } from './planing/planing.component';
import { PlanningService } from './planning.service';
import { AuthenticationService } from './authentication.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    SallesComponent,
    LoginComponent,
    FooterComponent,
    FindIdSalleComponent,
    HeaderuserComponent,
    PlaningComponent,
    LogoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ClientService,SalleService,PlanningService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
