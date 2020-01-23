import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ServiceformService } from './serviceform.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { TdfformComponent } from './tdfform/tdfform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewdataComponent,
    TdfformComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
