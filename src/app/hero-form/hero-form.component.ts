import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers=['Weather','Fire','Water','Air','Electric']
  model = new Hero(18, 'Super Man', this.powers[0],'Common Man');
  submitted =false;
  onSubmit(){
    this.submitted=true;
  }
  get diagnostic(){
    return JSON.stringify(this.model);
  }
  newHero(){
    this.model=new Hero(43,'','')
  }
  constructor() { }

  ngOnInit() {
  }

}
