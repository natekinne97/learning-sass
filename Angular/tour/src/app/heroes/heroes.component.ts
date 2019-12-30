import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

import {Hero} from '../hero';
import { HeroService } from '../hero.service';  

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 

  heroes: Hero[];
  
  // selected hero 
  selectedHero: Hero;
  // when clicked display the hero in the
  // this refers to the parameter the array 
  onSelect(hero: Hero): void {
    console.log(this, 'this')
    this.selectedHero = hero;
  }
  // make a constructor that takes the hero service
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    // the instance of hero service gets heroes
    // then we set heroes from this class to the heroes fromthe service
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  // life cycle hook
  // this is like component didmount in react
  ngOnInit() {
    this.getHeroes();
  }

}
