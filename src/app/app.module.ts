import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';
import { CalendarPage } from '../pages/calendar/calendar';
import { WorkerProvider } from '../providers/worker/worker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NgDatepickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkerProvider
  ]
})
export class AppModule {}
