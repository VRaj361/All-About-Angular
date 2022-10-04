import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functioncall',
  templateUrl: './functioncall.component.html',
  styleUrls: ['./functioncall.component.css']
})
export class FunctioncallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
   alert("clicked")
  }
  getSum(a:number,b:number){
    alert(a+b)
  }
}
