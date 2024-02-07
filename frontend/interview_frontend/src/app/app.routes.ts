// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './interview/interview.component';
import { MarketPageComponent } from './market-page/market-page.component';
import { provideRouter} from '@angular/router';
import { ApplicationConfig } from '@angular/core';


export const routes: Routes = [
  { path: 'interviews', component: InterviewComponent },
  { path: 'market-page', component: MarketPageComponent },

  // Add more routes as needed
];
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
