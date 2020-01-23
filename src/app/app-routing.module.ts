import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { TdfformComponent } from './tdfform/tdfform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'view', component: ViewdataComponent },
  { path: 'add', component: TdfformComponent },
  { path: 'add_data/:id', component: ReactiveformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

