import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';
import { MatInputModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import {MatFormFieldModule} from '@angular/material/form-field';

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
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgAisModule.forRoot(),
    MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
