import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-psjaogjc.us.auth0.com',
      clientId: 'q1TrgzQ6VUFEh1k3mRWPNAsHWTUOdreG'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
