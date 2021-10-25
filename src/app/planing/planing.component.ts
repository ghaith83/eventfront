
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, partition } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { planning } from '../client/planning';
import { participant } from '../gereequipe/participant';
import { ParticipantService } from '../participant.service';
import { PlanningService } from '../planning.service';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrls: ['./planing.component.css']
})
export class PlaningComponent implements OnInit {
   planing!: Observable<Array<planning>>
 idreservation?:any
 planings:planning[]=[]
 idsalle?:any
 planning=new planning()
 msg=""
 participants:participant[]=[]
 refraicheplan= new BehaviorSubject<boolean>(true);
  constructor(private _Activated_route: ActivatedRoute,
    private serviceplaning:PlanningService,
    private servicepart:ParticipantService) { }

  ngOnInit(): void {
    this._Activated_route.paramMap.subscribe(result =>
      {
          console.log(`id: ${result.get('idsalle')}`);
          console.log(`name: ${result.get('idreservation')}`);        
      }); 
    this.idsalle=this._Activated_route.snapshot.paramMap.get('idsalle')
    this.idreservation=this._Activated_route.snapshot.paramMap.get('idreservation')

    this.planing=this.refraicheplan.pipe(switchMap(_=> this.serviceplaning.getallplaning(this.idreservation,this.idsalle)));
   this.planing.subscribe((param)=>this.planings=param)  
  this.getallpart()
  }


addplanning(){
  this.serviceplaning.addplanning(this.planning,this.idsalle,this.idreservation).subscribe(
    data=>
    {
      
      console.log("addd !!!!!!")
      this.msg="planing add"
      this.refraicheplan.next(true);
    },
    error=>{
      console.log("not yet")
      this.msg="erreur"
    }
  )
 
}


delete(id:any){

  this.serviceplaning.deleteplaning(id)
  this.refraicheplan.next(true);
}
getallpart(){
  this.servicepart.getAllPart().subscribe((res:participant[])=>this.participants=res)
}
}
