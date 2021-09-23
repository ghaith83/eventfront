import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-headeruser',
  templateUrl: './headeruser.component.html',
  styleUrls: ['./headeruser.component.css']
})
export class HeaderuserComponent implements OnInit {
  msg:any
  constructor(public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.msg=sessionStorage.getItem("email")
  }

}
