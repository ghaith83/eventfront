import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { reservation } from '../reservation/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

  constructor(private serviceres:ReservationService) { }
  res:reservation[]=[]
  ngOnInit(): void {
    this.getreservation()
  }
  public getreservation():void{
    this.serviceres.getAllres().subscribe(
      (Res:reservation[])=>{
        this.res=Res
       
      },
      (error :HttpErrorResponse)=>{
      alert(error.message)
      }
    );
  }

}
