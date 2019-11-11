import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { AboutusComponent } from './../components/aboutus/aboutus.component';
import { ContactusComponent } from './../components/contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true}),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
