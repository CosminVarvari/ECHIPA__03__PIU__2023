import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { CreateJourneyComponent } from './components/create-journey/create-journey.component';
import { HeaderComponent } from './components/header/header.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { TransportComponent } from './components/transport/transport.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateJourneyComponent,
    HeaderComponent,
    CuisinesComponent,
    TransportComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
