import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  name=sessionStorage.getItem("username")  
  i=1;
  t1:Array<String>=new Array();
  a1:Array<number>=new Array();
   

  regRef=new FormGroup({
    contact:new FormControl(),
    phone:new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    //var obj = {}
    
    
    var a1 = new Array();
    if(this.i==1){
    let t = this.regRef.get("contact")?.value;
    let a = this.regRef.get("phone")?.value;
    this.t1.push(t);
    this.a1.push(a);
    this.i+=1;
    }else{
      let t = this.regRef.get("contact")?.value;
    let a = this.regRef.get("phone")?.value;
      this.t1.push(t);
      this.a1.push(a);
    }

  }
}
