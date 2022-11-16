import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenderComponent } from './gender/gender.component';
import { NationalitiesComponent } from './nationalities/nationalities.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, GenderComponent, NationalitiesComponent],
  imports: [CommonModule,BrowserModule, HttpClientModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
