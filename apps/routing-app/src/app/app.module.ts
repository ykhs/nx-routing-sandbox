import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AModule, aRoutes } from '@nx-routing-sandbox/a';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a', children: aRoutes },
  { path: 'b', loadChildren: '@nx-routing-sandbox/b#BModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
    AModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
