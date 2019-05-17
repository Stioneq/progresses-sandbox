import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {ProgressModule} from './progress/progress.module';
import { LoginBtnComponent } from './login-btn/login-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBtnComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
