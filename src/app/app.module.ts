import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { PlantsComponent } from './components/plants/plants.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ConfigComponent } from './components/config/config.component';
import { AxieComponent } from './components/axie/axie.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    NavbarComponent,
    AboutComponent,
    ConfigComponent,
    AxieComponent,
    IndexComponent
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
