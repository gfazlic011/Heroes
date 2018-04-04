import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-main-page',
  templateUrl: './hero-main-page.component.html',
  styleUrls: ['./hero-main-page.component.css']
})
export class HeroMainPageComponent implements OnInit {


  heroes:Hero[];
  constructor(private heroService:HeroServiceService) { }

  getBestHeroes(){
    this.heroService.getAllHeroes()
    .subscribe(heroes =>this.heroes = heroes.slice(2,6))
  }

  ngOnInit() {
    this.getBestHeroes()
  }

}
