import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
