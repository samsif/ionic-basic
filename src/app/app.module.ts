import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/setting';
import { LibraryService } from '../service/library.service';
import { CdListPage } from '../pages/cd/cdList';
import { BookListPage } from '../pages/book/bookList';
import { LendBookPage } from '../pages/book/lend-book/lend-book';
import { LendCdPage } from '../pages/cd/lend-cd/lend-cd';


@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    LendBookPage,
    LendCdPage,
    TabsPage,
    CdListPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    LendBookPage,
    LendCdPage,
    TabsPage,
    CdListPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    LibraryService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
