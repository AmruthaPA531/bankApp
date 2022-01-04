import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentUserName:any
  users:any={//:any for defining its type
    1000:{acno:1000,uname:"ann",password:"1000",balance:5000},
    1001:{acno:1001,uname:"anu",password:"1001",balance:5000},
    1002:{acno:1002,uname:"ram",password:"1002",balance:5000}
  }

  constructor() { }

  register(acno:any,password:any,uname:any){
    let db=this.users
    if(acno in db){
      return false
      alert("Account already exist")
    }
    else{
    db[acno]={
    acno,
    uname,
    password,
    balance:0
    }
    console.log(db);
    
    return true
   
    }

  }

  login(acno:any,password:any){
    let database=this.users
    if(acno in database){

      if(password==database[acno]["password"]){
        this.currentUserName=database[acno]["uname"]
        return true
     
      }
      else{
        alert("incorrect password")
        return false
      }
   }
   else{
     alert("invalid account number")
     return false
   }
  }

  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.users
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]=db[acno]["balance"]+amount
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("account does not exist")
      return false
    }
  }

  
  withdraw(acno:any,password:any,amt1:any){
    var amount1=parseInt(amt1)
    let db=this.users
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]=db[acno]["balance"]-amount1
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("account does not exist")
      return false
    }
  }
}
