import { WordsService } from './../../services/words.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const tryAgain = 'Sorry try again';
const correct = 'You are correct';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isCorrect$ = new BehaviorSubject<string>('');
  message$ = new BehaviorSubject<string>('');
  numberOfTries = 0;
  numberOfWins = 0;
  randonWord: string;
  scrambledWord: string;
  gameForm: FormGroup;

  get playerWord(): FormControl {
    return this.gameForm.get('playerWord') as FormControl;
  }


  constructor(private wordService: WordsService) { }

  ngOnInit() {
    this.gameForm = new FormGroup({
      playerWord: new FormControl(''),
    });

    this.wordService.getWords().subscribe(randomWord => this.randonWord = randomWord);
    this.scrambleWord();
  }

  checkGuess() {
    if (this.playerWord.value === this.randonWord) {
      this.playerWord.value('')
      this.isCorrect$.next('yes');
      this.message$.next(correct);
      this.numberOfWins = this.numberOfWins + 1;
      this.wordService.getWords().subscribe(randomWord => this.randonWord = randomWord);
      this.scrambleWord();
    } else {
      this.isCorrect$.next('no');
      this.numberOfTries = this.numberOfTries + 1;
      this.message$.next(tryAgain);
      this.tryAgain();
    }
  }
  private scrambleWord() {
    this.scrambledWord = this.randonWord.split('').sort(() => 0.5 - Math.random()).join('');
    if (this.randonWord === this.scrambledWord) {
      this.scrambleWord();
    }
  }
  gameOver() {
    this.numberOfTries = 0;
    this.playerWord.setValue(this.randonWord);
    this.message$.next('Thank You For Playing!');
    this.isCorrect$.next('game-over');
  }

  playAgain() {
    this.message$.next('');
    this.numberOfTries = 0;
    this.numberOfWins = 0;
    this.scrambleWord();
    this.wordService.getWords().subscribe(randomWord => this.randonWord = randomWord);
    this.scrambleWord();
  }

  clearField() {
    this.playerWord.setValue('');
    this.message$.next('');
  }

  private tryAgain() {
    this.playerWord.setValue('');
  }
}
