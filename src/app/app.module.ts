import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdvancedPage } from '../pages/advanced/advanced';
import { BeginnersPage } from '../pages/beginners/beginners';
import { RacePage } from '../pages/race/race';
import { UltraPage } from '../pages/ultra/ultra';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdvancedPage,
    BeginnersPage,
    RacePage,
    UltraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdvancedPage,
    BeginnersPage,
    RacePage,
    UltraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
