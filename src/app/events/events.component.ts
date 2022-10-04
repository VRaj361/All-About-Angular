import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getData(name:string){
    console.log(name)
  }
  getData1(name:string){
    console.log(name)
  }
  getData11(name:string){
    console.log(name)
  }
  getData12(name:string){
    console.log(name)
  }
  getData13(name:string){
    console.log(name)
  }
  getData14(name:string){
    console.log(name)
  }
}
