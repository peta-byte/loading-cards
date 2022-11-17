import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GenderComponent } from './gender/gender.component';
import { HomeComponent } from './home/home.component';
import { NationalitiesComponent } from './nationalities/nationalities.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gender',
    component: GenderComponent
  },
  {
    path: 'nationalities',
    component: NationalitiesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
