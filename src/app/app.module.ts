import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {bootstrap} from '../../node_modules/bootstrap/'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SummonerCardComponent } from './components/body/summoner-card/summoner-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SummonerCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
