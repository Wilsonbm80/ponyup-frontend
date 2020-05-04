import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyPoniesComponent } from './my-ponies/my-ponies.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-home', pathMatch: 'full' },
  { path: 'my-home', component: MyHomeComponent },
  { path: 'my-ponies', component: MyPoniesComponent },
  { path: 'pony-details', component: PonyDetailsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
