import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ConfigComponent } from './components/config/config.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AboutComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase_config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
