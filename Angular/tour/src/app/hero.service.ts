import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
// participates in dependency injection
@Injectable({
  providedIn: 'root'
})

// the hero service can get data from an api
// removing data access from components allows the developer
// to easily change their mind without changing the components
// itself
export class HeroService {

  // we are doing service in service injection
  constructor(private messageService: MessageService) { }

  // this creates an observable
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // this returns an observable that emits a single array value the mock heroes
    return of(HEROES);
  }
}
