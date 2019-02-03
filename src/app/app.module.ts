import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';
import { FoundComponent } from './found/found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lost', component: LostComponent},
  {path: 'found', component:FoundComponent}

]







//   { path: '', component : HomeComponent,
//   children: [
//     { 
//         path: 'lost', 
//         component: LostComponent 
//     },
//     { 
//       path: 'found', 
//       component: FoundComponent
//   },
// ]
// } 
// ];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LostComponent,
    FoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgAisModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
