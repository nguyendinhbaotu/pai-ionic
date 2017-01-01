import { Component, ViewChild } from '@angular/core';

import { NavController, Content, Keyboard, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  public hideTime: true;
  public userMessage: string;
  public messages: Message[];

  constructor(public navCtrl: NavController, public keyboard: Keyboard, public platform: Platform) {
    this.messages = new Array<Message>();
    this.messages.push(new Message('machine', 'How can I help you?'));
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      if (window.cordova && window.cordova.plugins.Keyboard) {
        // This requires installation of https://github.com/driftyco/ionic-plugin-keyboard
        // and can only affect native compiled Ionic2 apps (not webserved).
        cordova.plugins.Keyboard.disableScroll(true);
      }
    });
  }

  public sendMessage() {
    this.messages.push(new Message('user', this.userMessage));
    this.messages.push(new Message('machine', `I'm under construction.`));
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 300)
  }
}


export class Message {
  constructor(
    public type: string,
    public data: string) { }
}