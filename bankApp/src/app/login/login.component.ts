import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner" 

  accno="account number"
  acno=""
  pswd=""
  



 
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
  
    this.acno=event.target.value
    console.log(this.acno);

  }
  pswdChange(event:any){
  
    this.pswd=event.target.value
    console.log(this.pswd);

  }

  //event binding using $event
  login(){
    var acno=this.acno
    var password=this.pswd
    
   let result=this.ds.login(acno,password)
 if(result){
  alert("login successful")
  this.router.navigateByUrl('dashboard')
 }
 else{
  //  alert("failed")
 }
  }
}
