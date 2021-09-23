import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { SalleService } from './salle.service';
import { salle } from './Salles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  public salles:salle[]=[]
  public sallesId:salle[]=[]
  public salleName?: salle;
  constructor(private router: Router,
    private serviceSalle:SalleService
  ) { }

  ngOnInit(): void {
    this.getSalles()
  }

  public getSalles():void{
    this.serviceSalle.getallsalles().subscribe(
      (Res:salle[])=>{
        this.salles=Res
        console.log(this.salles);
      },
      (error :HttpErrorResponse)=>{
      alert(error.message)
      }
    );
  }


  
  getSalleId(idsalle:number){
    this.serviceSalle.getsallebyid(idsalle).subscribe(
      (res:salle)=>{
        this.salleName=res
        this.router.navigate(['sallesId/', idsalle]);
        
        

      }
      );
      
  }


  
  getSalleNom(id:string){
    this.serviceSalle.getsalleByName(id).subscribe(
      (rs:salle)=>{
        this.salleName=rs
        console.log(this.salleName.nom)
        this.serviceSalle.salle===this.salleName;
       
        this.router.navigateByUrl("sallesId");

      },
      (error :HttpErrorResponse)=>{
        alert(error.message)
        }
      );
  }

}
