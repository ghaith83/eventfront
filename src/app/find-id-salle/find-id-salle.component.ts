import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { timeStamp } from 'console';
import { element } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { reservation } from '../reservation/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { SalleService } from '../salles/salle.service';
import { salle } from '../salles/Salles';
import { SallesComponent } from '../salles/salles.component';


 
@Component({
  selector: 'app-find-id-salle',
  templateUrl: './find-id-salle.component.html',
  styleUrls: ['./find-id-salle.component.css'],
})
export class FindIdSalleComponent implements OnInit  {
 
  id:any;
 salles:[]=[]
  salle?:salle
  public sub: any;
  msg=""

 resrevation?:reservation
 idres:any
 reservation=new reservation();
  constructor( 
    private _Activated_route: ActivatedRoute ,private servicereservatin:ReservationService,
    private router:Router,private ServiceSalles:SalleService
  ) {
    
  }

  ngOnInit(): void {
    /*this.sub=this._Activated_route.paramMap.subscribe( params=>{
      console.log(params);
      this.id=params.get('idsalle');
      this.salle=this.ServiceSalles.getsallebyid(this.id)
    
    }*/
    this.id=this._Activated_route.snapshot.paramMap.get('idsalle')
    
  

    this.ServiceSalles.getsal().subscribe(
      countries => this.salles ===countries
    )
    /*this.salle=this.salles.find(l =>l.idsalle==this.id)*/
   console.log(this.salles)
   this.reserve()
   this.size()
  }
  reserve(){
    this.ServiceSalles.getsallebyid(this.id).subscribe(
      (data: salle) => {
        this.salle = data;
        console.log(this.salle)
      }
    )
  }

  rese(){
    this.servicereservatin.addReservation(this.reservation,this.id).subscribe(
      data=>{
        console.log(this.reservation.datereservation)
        console.log("reservation add !!!!!")
        this.msg="reservation bien succé"
        
          
      },
      error=>{
        console.log("not yet ??????")
        if(this.reservation.datereservation===undefined){
          this.msg="choisir un date pour votre reservation";
        }
        else{
          this.msg="la salle est deja reservé";
        }
       
      }
    )
    
  }

  planingId(){
    console.log(this.idres , this.id)
   this.servicereservatin.getreservationId(this.idres).subscribe(
     (res:reservation)=>{
     this.resrevation=res;
     
     this.router.navigate(['planing/', this.idres,this.id])
     }
   )
  }




size(){
  this.servicereservatin.getsize().subscribe(
    (size:number)=>{
      this.idres=size
      this.idres++
    }
  )
}

 



}