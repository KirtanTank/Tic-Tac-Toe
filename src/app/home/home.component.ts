import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opponent : any = 0;
  you : number = 0;

  constructor() { }

  c1 = document.body.querySelector("cell1")?.addEventListener("click", this.show1);
  c2 = document.body.querySelector("cell2")?.addEventListener("click", this.show2);
  c3 = document.body.querySelector("cell3")?.addEventListener("click", this.show3);
  c4 = document.body.querySelector("cell4")?.addEventListener("click", this.show4);
  c5 = document.body.querySelector("cell5")?.addEventListener("click", this.show5);
  c6 = document.body.querySelector("cell6")?.addEventListener("click", this.show6);
  c7 = document.body.querySelector("cell7")?.addEventListener("click", this.show7);
  c8 = document.body.querySelector("cell8")?.addEventListener("click", this.show8);
  c9 = document.body.querySelector("cell9")?.addEventListener("click", this.show9);

  value1 : any = "";
  value2 : any = "";
  value3 : any = "";
  value4 : any = "";
  value5 : any = "";
  value6 : any = "";
  value7 : any = "";
  value8 : any = "";
  value9 : any = "";

  element : any;

  arr : any[] = ["X", "O"];

  val : any;

  show1(){
      if(this.value1 === ""){
        this.value1 = this.arr[Math.floor(Math.random()*this.arr.length)];
        this.element = this.value1;
      }
      this.finish();
  }
  show2(){
    if(this.element === "X"){
      this.value2 = "O"
      this.element = this.value2;
    }
    else{
      this.value2 = "X"
      this.element = this.value2;
    }
    this.finish();

  }
  show3(){
    if(this.element === "X"){
      this.value3 = "O"
      this.element = this.value3;
    }
    else{
      this.value3 = "X"
      this.element = this.value3;
    }     
    this.finish();
  
  }
  show4(){
    if(this.element === "X"){
      this.value4 = "O"
      this.element = this.value4;
    }
    else{
      this.value4 = "X"
      this.element = this.value4;
    }
    this.finish();

  }
  show5(){
    if(this.element === "X"){
      this.value5 = "O"
      this.element = this.value5;
    }
    else{
      this.value5 = "X"
      this.element = this.value5;
    }  
    this.finish();
      
  }
  show6(){
    if(this.element === "X"){
      this.value6 = "O"
      this.element = this.value6;
    }
    else{
      this.value6 = "X"
      this.element = this.value6;
    }
    this.finish();

  }
  show7(){
    if(this.element === "X"){
      this.value7 = "O"
      this.element = this.value7;
    }
    else{
      this.value7 = "X"
      this.element = this.value7;
    } 
    this.finish();
 
  }
  show8(){
    if(this.element === "X"){
      this.value8 = "O"
      this.element = this.value8;
    }
    else{
      this.value8 = "X"
      this.element = this.value8;
    }   
    this.finish();

  }
  show9(){
    if(this.element === "X"){
      this.value9 = "O"
      this.element = this.value9;
    }
    else{
      this.value9 = "X"
      this.element = this.value9;
    }    
    this.finish();
     
  }

  finish(){
    if(((this.value1 !== "" && this.value2 !== "" && this.value3 !== "") && (this.value1 === this.value2 && this.value2 === this.value3)) || 
    ((this.value4 !== "" && this.value5 !== "" && this.value6 !== "") && (this.value4 === this.value5 && this.value5 === this.value6)) || 
    ((this.value7 !== "" && this.value8 !== "" && this.value9 !== "") && (this.value7 === this.value8 && this.value8 === this.value9)) || 
    ((this.value1 !== "" && this.value4 !== "" && this.value7 !== "") && (this.value1 === this.value4 && this.value4 === this.value7)) || 
    ((this.value2 !== "" && this.value5 !== "" && this.value8 !== "") && (this.value2 === this.value5 && this.value5 === this.value8)) || 
    ((this.value3 !== "" && this.value6 !== "" && this.value9 !== "") && (this.value3 === this.value6 && this.value6 === this.value9)) ||
    ((this.value1 !== "" && this.value5 !== "" && this.value9 !== "") && (this.value1 === this.value5 && this.value5 === this.value9)) ||
    ((this.value3 !== "" && this.value5 !== "" && this.value7 !== "") && (this.value3 === this.value5 && this.value5 === this.value7))
    ){
      alert("WIN");
      this.value1 = "";
      this.value2 = "";
      this.value3 = "";
      this.value4 = "";
      this.value5 = "";
      this.value6 = "";
      this.value7 = "";
      this.value8 = "";
      this.value9 = "";
      this.you = this.you + 1;
    }
    else if(((this.value1 !== "" && this.value2 !== "" && this.value3 !== "") && (this.value1 !== this.value2 && this.value2 !== this.value3)) && 
    ((this.value4 !== "" && this.value5 !== "" && this.value6 !== "") && (this.value4 !== this.value5 && this.value5 !== this.value6)) && 
    ((this.value7 !== "" && this.value8 !== "" && this.value9 !== "") && (this.value7 !== this.value8 && this.value8 !== this.value9)) && 
    ((this.value1 !== "" && this.value4 !== "" && this.value7 !== "") && (this.value1 !== this.value4 && this.value4 !== this.value7)) && 
    ((this.value2 !== "" && this.value5 !== "" && this.value8 !== "") && (this.value2 !== this.value5 && this.value5 !== this.value8)) && 
    ((this.value3 !== "" && this.value6 !== "" && this.value9 !== "") && (this.value3 !== this.value6 && this.value6 !== this.value9)) &&
    ((this.value1 !== "" && this.value5 !== "" && this.value9 !== "") && (this.value1 !== this.value5 && this.value5 !== this.value9)) &&
    ((this.value3 !== "" && this.value5 !== "" && this.value7 !== "") && (this.value3 !== this.value5 && this.value5 !== this.value7))
    ){
      alert("Draw");
      this.value1 = "";
      this.value2 = "";
      this.value3 = "";
      this.value4 = "";
      this.value5 = "";
      this.value6 = "";
      this.value7 = "";
      this.value8 = "";
      this.value9 = "";
    }
  }

  ngOnInit(): void {
  }

}
