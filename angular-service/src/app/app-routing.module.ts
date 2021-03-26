import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"\login", component:LoginComponent},
  {path:"\registration", component:RegistrationComponent},
  {path:"\portfolio", component:PortfolioComponent},
  {path:"", redirectTo:"\login",pathMatch:"full"},
  {path:"2", redirectTo:"\registration",pathMatch:"full"},
  {path:"3", redirectTo:"\portfolio",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
