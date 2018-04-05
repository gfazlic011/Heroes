import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailesComponent } from './hero-detailes/hero-detailes.component';
import { HeroMainPageComponent } from './hero-main-page/hero-main-page.component';


const routes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent
  },
  {
    path: 'hero/detailes/:id',
    component: HeroDetailesComponent
  },
  {
    path: 'main',
    component: HeroMainPageComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
