import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateJourneyComponent } from './components/create-journey/create-journey.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { TransportComponent } from './components/transport/transport.component';
import { MyJourneysComponent } from './components/my-journeys/my-journeys.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-journey', component: CreateJourneyComponent },
  { path: 'my-journeys', component: MyJourneysComponent },
  { path: 'cuisines', component: CuisinesComponent },
  { path: 'transport', component: TransportComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
