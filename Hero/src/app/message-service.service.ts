import { Injectable } from '@angular/core';

@Injectable()
export class MessageServiceService {


  messages = [];

  addMessage( message:string){
    this.messages.push(message);
  }


  clearMessages(){
    
    this.messages = [];
  }
  constructor() { }

}
