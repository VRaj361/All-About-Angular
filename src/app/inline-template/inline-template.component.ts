import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `
    <p class="custom">
      inline-template works!
    </p>
  `,
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
