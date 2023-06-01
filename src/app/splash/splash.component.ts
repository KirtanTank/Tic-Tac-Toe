import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private router : Router) { 
  }

  ngOnInit(): void {
  }

  play1 = document.querySelector(".player1") as HTMLElement;
  play2 = document.querySelector(".player2") as HTMLElement;
  checkVal1 : any;
  checkVal2 : any;
  condition : any;


  // Getting the values of input fields
  getValue1(val: any){
    this.checkVal1 = val;
    console.log(this.checkVal1.length);
  }
  getValue2(val: any){
    this.checkVal2 = val;
    console.log(this.checkVal2.length);
  }

  // check the input field 
  startGame(){
    // console.log(this.checkVal1, this.checkVal2);
    if(this.checkVal1 == undefined || this.checkVal2 == undefined){
      window.alert("Please Select a symbol!!");
    }
    else if(this.checkVal1.length > 1 || this.checkVal2.length > 1){
      window.alert("NOT ALLOWED");
    }
    else if(this.checkVal1 != undefined && this.checkVal2 != undefined && this.checkVal1 === this.checkVal2){
      window.alert("Please Select a Different Symbol!!");
    }
    else{
      this.router.navigate(['/', 'Play']);
    }
  }
}
