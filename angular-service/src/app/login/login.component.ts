import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });

  userList: Array<{uname: string, pwd: string}> =[]  

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginRef.value);
    let user1 = this.loginRef.get("username")?.value;
    let pass1 = this.loginRef.get("password")?.value;
    console.log(user1+" "+pass1)

     var userList = (sessionStorage.getItem("users"));
     
    console.log(userList)
    if(userList!= null){
      var obj = JSON.parse(userList);
      for(let i=0;i<obj.length ;i++){ 
        if(user1==obj[0].name1 || pass1==obj[0].pass1) {
          sessionStorage.setItem("username",user1);
          this.router.navigate(["3"]);
        // console.log(obj[0].name1);
        // console.log(obj[0].pass1);
        }
     }
     
    }
    
    // if(user1=="Ajay" && pass1=="123"){
    //   this.msg="Login Successful"
    // }else{
    //   this.msg="Login Failure"
    // }
  }

}
