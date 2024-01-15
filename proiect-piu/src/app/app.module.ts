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
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyJourneysComponent } from './components/my-journeys/my-journeys.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginCardComponent } from './components/login-page/login-card/login-card.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateJourneyComponent,
    HeaderComponent,
    CuisinesComponent,
    TransportComponent,
    MyJourneysComponent,
    LoginCardComponent,
    LoginPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
