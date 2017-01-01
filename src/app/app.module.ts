import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KeyboardAttachDirective } from '../directives/keyboardAttach'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KeyboardAttachDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp,
      /*
         * MODIFY BOOTSTRAP CODE BELOW
         * Adds a config object that disables scrollAssist and autoFocusAssist for iOS only
         * https://github.com/driftyco/ionic/issues/5571
         */
      {
        platforms: {
          ios: {
            // These options are available in ionic-angular@2.0.0-beta.2 and up.
            scrollAssist: false,    // Valid options appear to be [true, false]
            autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
          }
          // http://ionicframework.com/docs/v2/api/config/Config/)
        }
      }
      /*
       * END MODIFY
       */
      )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
