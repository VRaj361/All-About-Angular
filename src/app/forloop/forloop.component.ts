import { UserAuthModule } from './../user-auth/user-auth.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users=['a','b','c']
  userD = [{name:"vra",email:"vra@gmail.com"},{name:"fdsa",email:"fdas@gmail.com"}]
  user = [{name:"vra",email:"vra@gmail.com",soc:['a','b','c']},{name:"fdsa",email:"fdas@gmail.com",soc:['a','b']}]
}
