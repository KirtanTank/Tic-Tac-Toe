import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opponent : any = 0;
  you : number = 0;
  current : number = 0;

  constructor() { }

  element : any;

  arr : any = ["X", "O"];

  val : any = "X";

  show1(){
      if(this.current == 0){
        this.element = this.val;
        document.querySelector('.cell1')!.innerHTML = this.element;
        this.current++;
      }
      else if(document.querySelector('.cell1')!.innerHTML == ""){
        if(this.element === "X"){
          document.querySelector('.cell1')!.innerHTML = "O";
          this.element =  document.querySelector('.cell1')!.innerHTML;
        }
        else{
          document.querySelector('.cell1')!.innerHTML = "X";
          this.element = document.querySelector('.cell1')!.innerHTML;
        }
      }  
      this.current++;
      this.finish();
  }

  show2(){
    if(this.current == 0){
      this.element = this.val;
      document.querySelector('.cell2')!.innerHTML = this.element;
      this.current++;
    }
    if(document.querySelector('.cell2')!.innerHTML == ""){
      if(this.element === "X"){
        document.querySelector('.cell2')!.innerHTML = "O";
        this.element =  document.querySelector('.cell2')!.innerHTML;
      }
      else{
        document.querySelector('.cell2')!.innerHTML = "X";
        this.element = document.querySelector('.cell2')!.innerHTML;
      }
      this.current++;
      this.finish();  
    }
  }

  show3(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell3')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell3')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell3')!.innerHTML = "O"
        this.element =  document.querySelector('.cell3')!.innerHTML;
      }
      else{
         document.querySelector('.cell3')!.innerHTML = "X"
        this.element =  document.querySelector('.cell3')!.innerHTML;
      }
      this.current++;
      this.finish();
    }
  }
  show4(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell4')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell4')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell4')!.innerHTML = "O"
        this.element =  document.querySelector('.cell4')!.innerHTML;
      }
      else{
         document.querySelector('.cell4')!.innerHTML = "X"
        this.element =  document.querySelector('.cell4')!.innerHTML;
      }
      this.current++;
      this.finish();
    }
  }
  show5(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell5')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell5')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell5')!.innerHTML = "O"
        this.element =  document.querySelector('.cell5')!.innerHTML;
      }
      else{
         document.querySelector('.cell5')!.innerHTML = "X"
        this.element =  document.querySelector('.cell5')!.innerHTML;
      }
      this.current++;
      this.finish();
    }
  }
  show6(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell6')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell6')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell6')!.innerHTML = "O"
        this.element =  document.querySelector('.cell6')!.innerHTML;
      }
      else{
         document.querySelector('.cell6')!.innerHTML = "X"
        this.element =  document.querySelector('.cell6')!.innerHTML;
      }
      this.current++;
      this.finish();
    }
  }
  show7(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell7')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell7')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell7')!.innerHTML = "O"
        this.element =  document.querySelector('.cell7')!.innerHTML;
      }
      else{
         document.querySelector('.cell7')!.innerHTML = "X"
        this.element =  document.querySelector('.cell7')!.innerHTML;
      }
      this.current++;
      this.finish();
    }
  }
  show8(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell8')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell8')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell8')!.innerHTML = "O"
        this.element =  document.querySelector('.cell8')!.innerHTML;
      }
      else{
         document.querySelector('.cell8')!.innerHTML = "X"
        this.element =  document.querySelector('.cell8')!.innerHTML;
      }
      this.current++; 
      this.finish();
    }
  }
  show9(){
    if(this.current == 0){
      this.element = this.val;
       document.querySelector('.cell9')!.innerHTML = this.element;
      this.current++;
    }
    if( document.querySelector('.cell9')!.innerHTML == ""){
      if(this.element === "X"){
         document.querySelector('.cell9')!.innerHTML = "O"
        this.element =  document.querySelector('.cell9')!.innerHTML;
      }
      else{
         document.querySelector('.cell9')!.innerHTML = "X"
        this.element =  document.querySelector('.cell9')!.innerHTML;
      }
      this.current++; 
      this.finish();
    }
  }

  finish(){
      if((
        (document.querySelector('.cell1')!.innerHTML !== "" &&  document.querySelector('.cell2')!.innerHTML !== "" &&  document.querySelector('.cell3')!.innerHTML !== "") && 
      (document.querySelector('.cell1')!.innerHTML ===  document.querySelector('.cell2')!.innerHTML &&  document.querySelector('.cell2')!.innerHTML ===  document.querySelector('.cell3')!.innerHTML)) || 
      (( document.querySelector('.cell4')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell6')!.innerHTML !== "") && ( document.querySelector('.cell4')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell6')!.innerHTML)) || 
      (( document.querySelector('.cell7')!.innerHTML !== "" &&  document.querySelector('.cell8')!.innerHTML !== "" &&  document.querySelector('.cell9')!.innerHTML !== "") && ( document.querySelector('.cell7')!.innerHTML ===  document.querySelector('.cell8')!.innerHTML &&  document.querySelector('.cell8')!.innerHTML ===  document.querySelector('.cell9')!.innerHTML)) || 
      ((document.querySelector('.cell1')!.innerHTML !== "" &&  document.querySelector('.cell4')!.innerHTML !== "" &&  document.querySelector('.cell7')!.innerHTML !== "") && (document.querySelector('.cell1')!.innerHTML ===  document.querySelector('.cell4')!.innerHTML &&  document.querySelector('.cell4')!.innerHTML ===  document.querySelector('.cell7')!.innerHTML)) || 
      (( document.querySelector('.cell2')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell8')!.innerHTML !== "") && ( document.querySelector('.cell2')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell8')!.innerHTML)) || 
      (( document.querySelector('.cell3')!.innerHTML !== "" &&  document.querySelector('.cell6')!.innerHTML !== "" &&  document.querySelector('.cell9')!.innerHTML !== "") && ( document.querySelector('.cell3')!.innerHTML ===  document.querySelector('.cell6')!.innerHTML &&  document.querySelector('.cell6')!.innerHTML ===  document.querySelector('.cell9')!.innerHTML)) ||
      ((document.querySelector('.cell1')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell9')!.innerHTML !== "") && (document.querySelector('.cell1')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell9')!.innerHTML)) ||
      (( document.querySelector('.cell3')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell7')!.innerHTML !== "") && ( document.querySelector('.cell3')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell7')!.innerHTML))
      ){
        console.log("WIN");
        // this.restart();
        this.you = this.you + 1;
      }
      else if(this.current == 9){
        console.log("Draw");
        // this.restart();
      }
  }

  restart(){
      document.querySelector('.cell1')!.innerHTML = "";
      document.querySelector('.cell2')!.innerHTML = "";
      document.querySelector('.cell3')!.innerHTML = "";
      document.querySelector('.cell4')!.innerHTML = "";
      document.querySelector('.cell5')!.innerHTML = "";
      document.querySelector('.cell6')!.innerHTML = "";
      document.querySelector('.cell7')!.innerHTML = "";
      document.querySelector('.cell8')!.innerHTML = "";
      document.querySelector('.cell9')!.innerHTML = "";

  }
  ngOnInit(): void {
  }
}
