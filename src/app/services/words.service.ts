
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
const words = [
  'awkward', 'bagpipes', 'banjo', 'bungler', 'croquet', 'school', 'pigeon', 'winter',
  'shirt', 'computer', 'house', 'wallet', 'crypt', 'dwarves', 'fervid', 'fishhook', 'house', 'gazebo', 'gypsy',
  'haiku', 'haphazard', 'ivory', 'jazzy', 'jiffy', 'jinx', 'jukebox', 'kayak', 'kiosk', 'klutz',
  'memento', 'mystify', 'numbskull', 'ostracize', 'oxygen', 'pajama', 'phlegm', 'pixel', 'polka', 'quad', 'quip', 'rhythmic', 'rogue',
  'sphinx', 'squawk', 'swivel', 'today', 'twelfth', 'unzip', 'waxy', 'yacht', 'zealous', 'zigzag', 'zippy',
  'zombie', 'dramatic', 'notebook', 'detail', 'graceful', 'carriage', 'plate', 'fold', 'rifle',
  'memory', 'skillful', 'vengeful', 'brief', 'young', 'yarn', 'certain', 'evasive',
  'deep', 'shiny', 'open', 'obedient', 'witty', 'shiver', 'observation', 'bird', 'demonic', 'answer', 'aware',
  'comparison', 'tedious', 'zealous', 'greasy', 'acoustic', 'cars', 'sincere', 'valuable', 'cave', 'curl',
  'mine', 'plain', 'voiceless', 'defective', 'cable', 'mend', 'crabby', 'sturdy', 'knot', 'use', 'scissors', 'tow'
];
@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private _http: HttpClient) { }
  wordList: string[];
  getWords(): Observable<string[]> {
    return of(words);
    //   // const headers = new HttpHeaders();
    //   // headers.append('x-rapidapi-host', 'twinword-word-graph-dictionary.p.rapidapi.com');
    //   // headers.append('x-rapidapi-key', 'b14dbd97f0mshf7537a54edf57f0p1465bcjsnbd9981adabe8');
    //   return this._http.get<string[]>(`https://api.datamuse.com/words?rel_trg=cow`)
  }
}
