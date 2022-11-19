import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenderComponent } from './gender/gender.component';
import { NationalitiesComponent } from './nationalities/nationalities.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { userReducer } from '../store/user.reducer';
import { UserEffects } from '../store/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    GenderComponent,
    NationalitiesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ users: userReducer })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
