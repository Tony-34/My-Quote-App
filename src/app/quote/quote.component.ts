import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   
    new  Quote(1, 'Every day should be a new day', 'Harry Styles', new Date(2020, 7,  14)),
    new  Quote(2, 'life is hard, but if it werent, where would the challange be', 'Zayn Malik', new Date(2020, 5, 8)),
    new  Quote(3, 'live for who you are and what you love', 'Zayn Malik', new Date(2023, 4, 5)),
    new  Quote(4, 'A smile could last for a second but the memory of it last for a last for a lifetime', 'Liam Payne', new Date(1998, 8, 7)),
    new  Quote(5, 'just close your eyes and enjoy the roler coaster that is life', 'Zayn Malik', new Date(2017, 4, 12)),
    new Quote(6, 'Only you can control your future', 'DrSeuss', new Date(2022, 5, 9)),
  ];

  like(index){
    this.quotes[index].like++;
  }

  unlike(index){
    this.quotes[index].unlike++;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
        
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
