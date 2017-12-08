import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

export const aRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppComponent]
})
export class AModule {
}
