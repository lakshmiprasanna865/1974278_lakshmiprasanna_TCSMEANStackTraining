import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteComponent } from './delete/delete.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { StoreComponent } from './store/store.component';
import { AddcourseComponent } from './addcourse/addcourse.component';


const routes: Routes = [
  {path:"\delete", component:DeleteComponent},
  {path:"\retrieve", component:RetrieveComponent},
  {path:"\store", component:StoreComponent},
  {path:"\addcourse", component:AddcourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
