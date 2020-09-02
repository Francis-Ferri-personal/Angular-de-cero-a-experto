import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
