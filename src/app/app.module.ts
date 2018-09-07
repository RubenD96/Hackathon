import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Camera} from "@ionic-native/camera";
import {Base64} from "@ionic-native/base64";
import {PhotoViewer} from "@ionic-native/photo-viewer";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {Photoview} from "../pages/photoview/photoview";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Photoview
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Photoview
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
