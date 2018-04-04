import { Injectable } from '@angular/core';
import { MessageServiceService } from './message-service.service';
import { Hero } from './hero';
import { HEROES } from './ListOfHeroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HeroServiceService {

  constructor(private messageService:MessageServiceService) { }

  
  getAllHeroes():Observable<Hero[]>{

    this.messageService.addMessage('Fetching all heroes')
    return of(HEROES)
  }

  getHero(id:number):Observable<Hero>{
    this.messageService.addMessage(`Fetching hero with id = ${id}`)
    return of(HEROES.find(hero =>hero.id ===id))
  }

}
