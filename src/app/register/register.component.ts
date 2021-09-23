import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../client/client.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { client } from '../client/client';
import { error } from 'protractor';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 ClientForm:FormGroup;
 client=new client();
 msg=""
  constructor(private router: Router,
    private clientservice :ClientService
  ) {
    this.ClientForm=new FormGroup({
      nom:new FormControl(),
      prenom :new FormControl(),
      email:new FormControl(),
      password :new FormControl(),
      ville :new FormControl(),
      region :new FormControl(),
      telephon :new FormControl(),
      adresse :new FormControl(),

    })
   }

  ngOnInit(): void {
  }

  insription(){
    this.clientservice.addClient(this.client).subscribe(
      data=>{
        
        console.log("register ok !!!!!")
        this.msg="register succè"
      },
      error=>{
        console.log("not yet ??????")
       this.msg="register failer cause email already exist";

      }
    )
    
  }
}
