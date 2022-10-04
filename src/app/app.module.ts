import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineStyleTemplateComponent } from './inline-style-template/inline-style-template.component';

import { UserAuthModule } from './user-auth/user-auth.module';
import { FunctioncallComponent } from './functioncall/functioncall.component';
import { EventsComponent } from './events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    InlineStyleTemplateComponent,
    FunctioncallComponent,
    EventsComponent,

  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
