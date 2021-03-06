import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { CatComponent } from './cat/cat.component';
import { FindIdSalleComponent } from './find-id-salle/find-id-salle.component';
import { GereequipeComponent } from './gereequipe/gereequipe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PlaningComponent } from './planing/planing.component';
import { RegisterComponent } from './register/register.component';
import { ResComponent } from './res/res.component';
import { SalleByCatComponent } from './salle-by-cat/salle-by-cat.component';
import { SallesComponent } from './salles/salles.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'salles',component:SallesComponent
  },
  
  {
    path:'sallesId/:idsalle',component:FindIdSalleComponent,canActivate:[AuthGaurdService] 
    
  },
  
  {
    path:'planing/:idreservation/:idsalle',component:PlaningComponent,canActivate:[AuthGaurdService]
  },
  {
    path:'logout',component:LogoutComponent
  },
  {
    path:'category',component:CatComponent
  },
  {
    path:'category/:catnom',component:SalleByCatComponent 
    
  },
  {
    path:'reservation',component:ResComponent 
    
  },
  {
    path:'gere',component:GereequipeComponent 
    
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
