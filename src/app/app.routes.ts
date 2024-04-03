import { CarListGroupComponent } from './features/components/cars/car-list-group/car-list-group.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './features/components/register/register.component';

export const routes: Routes = 
[
   
   {path:'',redirectTo:'home-page',pathMatch:'full'},
   {path:"home-page",component:HomePageComponent,children:[
      {path:"",pathMatch:"full",component:CarListGroupComponent},
      {path:"cars/model",pathMatch:"full",component:CarListGroupComponent},
      {path:"cars/model/:modelId",component:CarListGroupComponent}
   ]},
   {path:'register',component:RegisterComponent}
   
];
