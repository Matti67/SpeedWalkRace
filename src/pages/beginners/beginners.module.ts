import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeginnersPage } from './beginners';

@NgModule({
  declarations: [
    BeginnersPage,
  ],
  imports: [
    IonicPageModule.forChild(BeginnersPage),
  ],
})
export class BeginnersPageModule {}
