import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

heroes:Hero[];

  constructor(private heroService:HeroServiceService) { }

  getHeroes(){
    this.heroService.getAllHeroes()
    .subscribe(hero => this.heroes = hero)
  }


  ngOnInit() {
    this.getHeroes();
  }

}
