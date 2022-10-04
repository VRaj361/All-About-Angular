import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color='red'
  bgColor='green'
  changeColor(){
    this.color = 'blue'
    this.bgColor = 'red'
  }
}
