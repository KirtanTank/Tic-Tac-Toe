import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private router : Router, private service : DataServiceService) { 
  }

  ngOnInit(): void {
  }

  play1 = document.querySelector(".player1") as HTMLElement;
  play2 = document.querySelector(".player2") as HTMLElement;
  checkVal1 : any;
  checkVal2 : any;
  condition : any;

  errorLine : string = "";

  // Getting the values of input fields
  getValue1(val: any){
    this.checkVal1 = val;
    // console.log(this.checkVal1.length);
  }
  getValue2(val: any){
    this.checkVal2 = val;
    // console.log(this.checkVal2.length);
  }

  // addNotification(valueStr : any){
  //   const notification = document.querySelector(".notification");
  //   const toast = document.createElement("div");
  //     toast.className = `design`;
  //     toast.innerHTML = `
  //     <img src="/assets/cancel.png" class="image">
  //     <span class="error"><b>${valueStr}</b></span>`;
  //     notification?.appendChild(toast);
  // }
  // check the input field 
  startGame(){
    const design = document.querySelector(".design");
    if(this.checkVal1 == undefined || this.checkVal2 == undefined){
      this.errorLine = "Please Select a symbol!!";
      // this.addNotification(this.errorLine);
      design?.classList.add("notification--show");
      setTimeout(() => {
        design?.classList.remove("notification--show");
      }, 2000);
    }
    else if(this.checkVal1.length > 1 || this.checkVal2.length > 1){
      this.errorLine = "More Than One Character is not Allowed!";
      // this.addNotification(this.errorLine);
      design?.classList.add("notification--show");
      setTimeout(() => {
        design?.classList.remove("notification--show");
      }, 2000);
    }
    else if(this.checkVal1 != undefined && this.checkVal2 != undefined && this.checkVal1 === this.checkVal2){
      this.errorLine = "Please Select a Different Symbol!!";
      // this.addNotification(this.errorLine);
      design?.classList.add("notification--show");
      setTimeout(() => {
        design?.classList.remove("notification--show");
      }, 2000);
    }
    else{
      this.router.navigate(['/', 'Play']);
      this.service.value1 = this.checkVal1;
      this.service.value2 = this.checkVal2;
    }
  }
}
