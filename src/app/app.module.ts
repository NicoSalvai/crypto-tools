import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './components/plants/plants.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ConfigComponent } from './components/config/config.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AxieComponent } from './components/axie/axie.component';



@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    NavbarComponent,
    AboutComponent,
    ConfigComponent,
    AxieComponent
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
