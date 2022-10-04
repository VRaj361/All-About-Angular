import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style-template',
  template: `
    <p class="custom">
      inline-style-template works!
    </p>
  `,
  styles: [
    `
      .custom{color:red}
    `
  ]
})
export class InlineStyleTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
