import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ParticipantService } from '../participant.service';
import { RoleService } from '../role.service';
import { role } from '../role/role';
import { participant } from './participant';


@Component({
  selector: 'app-gereequipe',
  templateUrl: './gereequipe.component.html',
  styleUrls: ['./gereequipe.component.css']
})
export class GereequipeComponent implements OnInit {
 msg=""
 role1!: Observable<Array<role>>
 part?:Observable<Array<participant>>
  participant = new participant()
  roles:role[]=[]
  parts:participant[]=[]
  role=new role()
  refraicheplan= new BehaviorSubject<boolean>(true);

  constructor(private roleservice:RoleService,private partserver:ParticipantService) { }

  ngOnInit(): void {
    this.role1=this.refraicheplan.pipe(switchMap(_=> this.roleservice.getAllRol()));
    this.role1.subscribe((param)=>this.roles=param)
    this.part=this.refraicheplan.pipe(switchMap(_=>this.partserver.getAllPart()));
    this.part.subscribe((parm)=>this.parts=parm)
  }

  addrole(){
    this.roleservice.addrole(this.role).subscribe(
    data=>{
      this.msg="ajouter role bien succes";
      this.refraicheplan.next(true);
    },
    error=>{
      this.msg="erreur ...";
    }
    
      );
  }
  addparticipant(){
    this.partserver.addparticipant(this.participant).subscribe(
    data=>{
      this.msg="ajouter personne bien succès";
      this.refraicheplan.next(true);
    },
    error=>{
      this.msg="erreur ....";
    }
    
      );

    

    }

    getall(){
      this.roleservice.getAllRol().subscribe()
    }
    delete(id:any){
    this.roleservice.delette(id).subscribe(()=>{this.getall()
      this.refraicheplan.next(true);
    },
    error=>{
       alert(error.message)
    }
    )
  }
  deletepart(id:any){
    this.partserver.delette(id).subscribe(()=>{this.getall()
      this.refraicheplan.next(true);
    },
    error=>{
       alert(error.message)
    }
    )
  }
  
  
  

}
