import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { QuoteBoxComponet } from '../quote-box/quote-box.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponet
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ QuoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }