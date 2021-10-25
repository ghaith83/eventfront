import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from '../category';
import { CategoryService } from '../category.service';
import { SalleService } from '../salles/salle.service';
import { salle } from '../salles/Salles';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent implements OnInit {
  public salles:salle[]=[]
  public category:category[]=[]
  constructor(private serviceslle:CategoryService, private salle:SalleService
    ,private router:Router) { }

  ngOnInit(): void { 
    this.getallcat()
  }
  getallcat():void{
    this.serviceslle.getallcat().subscribe(
      (res:category[])=>{
      this.category=res
      },
      (error :HttpErrorResponse)=>{
        alert(error.message)
        }
    ); 
      }
      
      getsallebycat(catnom:any):void{
        console.log(catnom)
        this.salle.getsallebycat(catnom).subscribe(
          ()=>
          {
           
           this.router.navigate(['category/',catnom]);

          },
          (error:HttpErrorResponse)=>{
            alert(error.message)
          }
          );
      }
    

}
