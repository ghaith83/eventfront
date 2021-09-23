
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from '../client/client';
import { ClientService } from '../client/client.service';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new client();
   msg=''
   key:any
   invalidLogin = false
   
  constructor(private clientservice:ClientService,private route:Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
   
  }

  loginUser(){
      this.clientservice.loginClient(this.user).subscribe(
        data=>{
          console.log("connection ok!!!!!!")
          this.route.navigate(['/salles'])

          
          this.key===true
          if (this.loginservice.authenticate(this.user.email, this.user.password)
        ) {
          this.route.navigate(['/salles'])
          this.invalidLogin = false
        } else
          this.invalidLogin = true
      
          
        },
          error=>{(console.log("connection error"+this.user.email))
                    this.msg="mauvais identifiant s'il vous plaît entrez email et mot de passe valides";
        }
          
      );
      }
     
 

      inscription(){
        this.route.navigateByUrl("register")
      }

      
}

