import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  /* { path: '', redirectTo: 'exchange-rate', pathMatch: 'full' },
  { path: 'exchange-rate', component: ExchangeTableComponent } */
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ RouterModule ]
})
export class AppRoutingModule { }
