import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count : number = 0;
  decision : string = '';
  flag_win : boolean = false;
  flag_draw : boolean = false;


  constructor(public service : DataServiceService, private router : Router) { }

  element : any;
  val : any = "X";

  symbol1 : any = this.service.value1;
  symbol2 : any = this.service.value2;

  show1(){
      if(this.count == 0){
        this.element = this.symbol1;
        document.querySelector('.cell1')!.innerHTML = this.element;
        this.count++;
      }
      else if(document.querySelector('.cell1')!.innerHTML == ""){
        if(this.element === this.symbol1){
          document.querySelector('.cell1')!.innerHTML = this.symbol2;
          this.element =  document.querySelector('.cell1')!.innerHTML;
        }
        else{
          document.querySelector('.cell1')!.innerHTML = this.symbol1;
          this.element = document.querySelector('.cell1')!.innerHTML;
        }
        this.count++;
        this.finish();
      }  
  }

  show2(){
    if(this.count == 0){
      this.element = this.symbol1;
      document.querySelector('.cell2')!.innerHTML = this.element;
      this.count++;
    }
    else if(document.querySelector('.cell2')!.innerHTML == ""){
      if(this.element === this.symbol1){
        document.querySelector('.cell2')!.innerHTML = this.symbol2;
        this.element =  document.querySelector('.cell2')!.innerHTML;
      }
      else{
        document.querySelector('.cell2')!.innerHTML = this.symbol1;
        this.element = document.querySelector('.cell2')!.innerHTML;
      }
      this.count++;
      this.finish();  
    }
  }

  show3(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell3')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell3')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell3')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell3')!.innerHTML;
      }
      else{
         document.querySelector('.cell3')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell3')!.innerHTML;
      }
      this.count++;
      this.finish();
    }
  }

  show4(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell4')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell4')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell4')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell4')!.innerHTML;
      }
      else{
         document.querySelector('.cell4')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell4')!.innerHTML;
      }
      this.count++;
      this.finish();
    }
  }

  show5(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell5')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell5')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell5')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell5')!.innerHTML;
      }
      else{
         document.querySelector('.cell5')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell5')!.innerHTML;
      }
      this.count++;
      this.finish();
    }
  }

  show6(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell6')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell6')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell6')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell6')!.innerHTML;
      }
      else{
         document.querySelector('.cell6')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell6')!.innerHTML;
      }
      this.count++;
      this.finish();
    }
  }

  show7(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell7')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell7')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell7')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell7')!.innerHTML;
      }
      else{
         document.querySelector('.cell7')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell7')!.innerHTML;
      }
      this.count++;
      this.finish();
    }
  }

  show8(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell8')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell8')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell8')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell8')!.innerHTML;
      }
      else{
         document.querySelector('.cell8')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell8')!.innerHTML;
      }
      this.count++; 
      this.finish();
    }
  }
  
  show9(){
    if(this.count == 0){
      this.element = this.symbol1;
       document.querySelector('.cell9')!.innerHTML = this.element;
      this.count++;
    }
    else if( document.querySelector('.cell9')!.innerHTML == ""){
      if(this.element === this.symbol1){
         document.querySelector('.cell9')!.innerHTML = this.symbol2
        this.element =  document.querySelector('.cell9')!.innerHTML;
      }
      else{
         document.querySelector('.cell9')!.innerHTML = this.symbol1
        this.element =  document.querySelector('.cell9')!.innerHTML;
      }
      this.count++; 
      this.finish();
    }
  }

  popup(){
    document.querySelector('.popup')?.classList.add("open-pop");
  }

  close(){
    document.querySelector('.popup')?.classList.remove("open-pop");
  }

  finish(){
      if(
        ((document.querySelector('.cell1')!.innerHTML !== "" &&  document.querySelector('.cell2')!.innerHTML !== "" &&  document.querySelector('.cell3')!.innerHTML !== "") && (document.querySelector('.cell1')!.innerHTML ===  document.querySelector('.cell2')!.innerHTML &&  document.querySelector('.cell2')!.innerHTML ===  document.querySelector('.cell3')!.innerHTML)) || 
        ((document.querySelector('.cell1')!.innerHTML !== "" &&  document.querySelector('.cell4')!.innerHTML !== "" &&  document.querySelector('.cell7')!.innerHTML !== "") && (document.querySelector('.cell1')!.innerHTML ===  document.querySelector('.cell4')!.innerHTML &&  document.querySelector('.cell4')!.innerHTML ===  document.querySelector('.cell7')!.innerHTML)) || 

        (( document.querySelector('.cell4')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell6')!.innerHTML !== "") && ( document.querySelector('.cell4')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell6')!.innerHTML)) || 

        (( document.querySelector('.cell7')!.innerHTML !== "" &&  document.querySelector('.cell8')!.innerHTML !== "" &&  document.querySelector('.cell9')!.innerHTML !== "") && ( document.querySelector('.cell7')!.innerHTML ===  document.querySelector('.cell8')!.innerHTML &&  document.querySelector('.cell8')!.innerHTML ===  document.querySelector('.cell9')!.innerHTML)) || 

        (( document.querySelector('.cell2')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell8')!.innerHTML !== "") && ( document.querySelector('.cell2')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell8')!.innerHTML)) || 

        (( document.querySelector('.cell3')!.innerHTML !== "" &&  document.querySelector('.cell6')!.innerHTML !== "" &&  document.querySelector('.cell9')!.innerHTML !== "") && ( document.querySelector('.cell3')!.innerHTML ===  document.querySelector('.cell6')!.innerHTML &&  document.querySelector('.cell6')!.innerHTML ===  document.querySelector('.cell9')!.innerHTML)) ||

        ((document.querySelector('.cell1')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell9')!.innerHTML !== "") && (document.querySelector('.cell1')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell9')!.innerHTML)) || 

        (( document.querySelector('.cell3')!.innerHTML !== "" &&  document.querySelector('.cell5')!.innerHTML !== "" &&  document.querySelector('.cell7')!.innerHTML !== "") && ( document.querySelector('.cell3')!.innerHTML ===  document.querySelector('.cell5')!.innerHTML &&  document.querySelector('.cell5')!.innerHTML ===  document.querySelector('.cell7')!.innerHTML))
      ){
        // console.log("WIN");
        this.decision = "WIN"
        this.flag_win = true;
        // this.you = this.you + 1;
        // console.log(this.count);
        this.popup();
      }
      else if(this.count == 9){
        // console.log("Draw");
        this.decision = "DRAW"
        this.flag_draw = true;
        // console.log(this.count);
        this.popup();
      }
      else{
        console.log(this.count);
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
      this.close();
      this.decision = "";
      this.count = 0;
      this.flag_win = false;
      this.flag_draw = false;
      
  }
  ngOnInit(): void {
  }
}
