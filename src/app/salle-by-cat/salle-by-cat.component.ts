import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { SalleService } from '../salles/salle.service';
import { salle } from '../salles/Salles';

@Component({
  selector: 'app-salle-by-cat',
  templateUrl: './salle-by-cat.component.html',
  styleUrls: ['./salle-by-cat.component.css']
})
export class SalleByCatComponent implements OnInit {
  salles:salle[]=[]
  catnom:any;
  constructor(private salleservice:SalleService, 
    private _Activated_route: ActivatedRoute,
    private router:Router) {
      
    } 

  ngOnInit(): void {
    this._Activated_route.paramMap.subscribe(result =>
      {
          console.log(`catnom: ${result.get('catnom')}`);
                 
      }); 
    this.catnom=this._Activated_route.snapshot.paramMap.get('catnom');
    this.getsallebycats();
  }
  getsallebycats():void{
    this.salleservice.getsallebycat(this.catnom!).subscribe(
      (res:salle[])=>
      {
       this.salles=res
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
      );
  }

  getSalleId(idsalle:number){
    this.salleservice.getsallebyid(idsalle).subscribe(
      ()=>{
       
        this.router.navigate(['sallesId/', idsalle]);
        
        

      }
      );
      
  }

}
