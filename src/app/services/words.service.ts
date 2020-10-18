import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
const words = [
  'hello',
  'house',
  'friend'
];

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor() { }

  getWords(): Observable<string> {
    const randomNumber = Math.floor(Math.random() * words.length);
    const word = words[randomNumber];
    return of(word);
  }
}
