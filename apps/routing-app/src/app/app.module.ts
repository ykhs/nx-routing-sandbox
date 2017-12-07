import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppModule as aAppModule } from '../../../a-app/src/app/app.module';
import { AppModule as bAppModule } from '../../../b-app/src/app/app.module'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a', loadChildren: '../../../a-app/src/app/app.module#AppModule' },
  { path: 'b', loadChildren: '../../../b-app/src/app/app.module#AppModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
    aAppModule,
    bAppModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
