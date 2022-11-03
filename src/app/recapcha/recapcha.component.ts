import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recapcha',
  templateUrl: './recapcha.component.html',
  styleUrls: ['./recapcha.component.css']
})
export class RecapchaComponent implements OnInit {
  protected capcha: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.capcha = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    console.log(this.capcha)

  }

  ngOnInit(): void {
    console.log(this.capcha.value.recaptcha)
    if(this.capcha.touched && this.capcha.value.recaptcha!=""){
      console.log("hello")
    }
  }

  siteKey:string="6LcV_NUiAAAAAC4UGTEwsyRXwfgKQ9MU7lMqCkXW"
}
