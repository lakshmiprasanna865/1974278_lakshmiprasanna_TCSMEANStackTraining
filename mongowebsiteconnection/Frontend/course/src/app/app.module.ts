import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { DeleteComponent } from './delete/delete.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    RetrieveComponent,
    DeleteComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
