import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  title="This is my title"

  ngOnInit(): void {
  }

  getValue(){
    return "This is return value by function"
  }

}
