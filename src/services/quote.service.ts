import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app/app.component';

@Injectable()
export class QuoteService {
    constructor (public http: HttpClient){
        
    }
    
    public getRandomQuote() {
        return this.http.get('https://talaikis.com/api/quotes/random');
    }
}