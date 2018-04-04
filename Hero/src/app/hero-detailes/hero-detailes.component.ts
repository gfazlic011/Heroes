import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';



@Component({
  selector: 'app-hero-detailes',
  templateUrl: './hero-detailes.component.html',
  styleUrls: ['./hero-detailes.component.css']
})
export class HeroDetailesComponent implements OnInit {
hero:Hero;
  constructor(
    private heroService:HeroServiceService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(){
    this.location.back()
  }

  ngOnInit() {
    this.getHero();
  }

}
