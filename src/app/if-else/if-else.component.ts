import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // show=false//boolean
  show ='yes'
  color = 'blue'
}
