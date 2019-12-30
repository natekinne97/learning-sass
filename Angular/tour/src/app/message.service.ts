import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this service exposes a cache of messages to 
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
