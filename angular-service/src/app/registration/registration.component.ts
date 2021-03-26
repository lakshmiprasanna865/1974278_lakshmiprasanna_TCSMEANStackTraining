import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regRef=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    username:new FormControl(),
    password:new FormControl()
  });

    name1: string="";
    pass1 : string="";
    empList: Array<{name1: string, pass1: string}> = []; 
    // uname: string="";
    // pwd : string="";
  userList=[{}]

  // users: Array<string>=[];
  // pwds: Array<string>=[];
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    
    let user = this.regRef.get("username")?.value;
    let pass = this.regRef.get("password")?.value;
    console.log("user "+ user)
    console.log("pass "+ pass)
    console.log("reg")
    
    console.log(this.regRef.value);

  

    if(user != null && pass != null){

      console.log(this.name1,this.pass1);
      console.log(this.empList);
        this.empList.push({ name1: user, pass1: pass });
        console.log(this.empList);

        sessionStorage.setItem("users", JSON.stringify(this.empList));

    //   console.log("uL brfore")
    //   console.log(this.userList);
    //  // this.userList["vfsd"]="fsdfsd";
    //   this.userList.push({  user, pass});
    //   console.log("uL after")
    //   console.log(this.userList);
      
    //   sessionStorage.setItem("users", JSON.stringify(this.userList));

      // this.users.push(user);
      // sessionStorage.setItem("users", JSON.stringify(this.users));
      // this.pwds.push(pass);
      // sessionStorage.setItem("pwds", JSON.stringify(this.pwds));
      // console.log(this.users);
      // console.log(this.pwds);

      this.router.navigate([""]);
    }

  }
  

}
