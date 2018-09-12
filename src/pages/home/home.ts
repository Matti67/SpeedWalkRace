import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvancedPage } from '../advanced/advanced'; // <= Import your page here
import { BeginnersPage } from '../beginners/beginners'; // <= Import your page here
import { UltraPage } from '../ultra/ultra'; // <= Import your page here
import { RacePage } from '../race/race'; // <= Import your page here

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAdvanced(){
     this.navCtrl.push(AdvancedPage); // <= it navigates to page 2
  }
  gotoBeginners(){
      this.navCtrl.push(BeginnersPage); // <= it navigates to page 2
  }
  gotoRace(){
       this.navCtrl.push(RacePage); // <= it navigates to page 2
  }
  gotoUltra(){
        this.navCtrl.push(UltraPage); // <= it navigates to page 2
  }
}
