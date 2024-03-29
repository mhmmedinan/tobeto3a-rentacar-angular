import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = 
[
   {path:'',redirectTo:'home-page',pathMatch:'full'},
   {path:"home-page",component:HomePageComponent}
];
