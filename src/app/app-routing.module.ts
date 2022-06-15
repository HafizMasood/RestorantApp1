import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodDetailsComponent } from './food-details/food-details.component';


const routes: Routes = [
  {path:'foodDetails',component:FoodDetailsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**', redirectTo:'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
