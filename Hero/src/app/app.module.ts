import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailesComponent } from './hero-detailes/hero-detailes.component';
import { HeroMainPageComponent } from './hero-main-page/hero-main-page.component';
import { HeroServiceService } from './hero-service.service';
import { MessageServiceService } from './message-service.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailesComponent,
    HeroMainPageComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroServiceService, MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
