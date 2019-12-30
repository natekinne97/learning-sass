import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

// this is a child component of the heroes class
export class HeroDetailComponent implements OnInit {
  // specify that we are using an input for this class
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
