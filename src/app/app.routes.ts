import { CarListGroupComponent } from './features/components/cars/car-list-group/car-list-group.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './features/components/register/register.component';
import { LoginComponent } from './features/components/login/login.component';
import { CarListPageComponent } from './pages/car-list-page/car-list-page.component';
import { LoginGuard } from './core/guards/login/login.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AddBrandFormComponent } from './features/components/brands/add-brand-form/add-brand-form.component';
import { BrandListComponent } from './features/components/brands/brand-list/brand-list.component';

export const routes: Routes = 
[
   
   {path:'',redirectTo:'home-page',pathMatch:'full'},
   {path:"home-page",component:HomePageComponent,children:[
      {path:"",pathMatch:"full",component:CarListGroupComponent},
      {path:"cars/model",pathMatch:"full",component:CarListGroupComponent},
      {path:"cars/model/:modelId",component:CarListGroupComponent}
      
   ]},
   {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
   {path:"car-list",component:CarListPageComponent,canActivate:[LoginGuard]},
   {path:"admin",component:AdminComponent},
   {path:"add-brand",pathMatch:'full',component:AddBrandFormComponent},
   {path:"brand-list",component:BrandListComponent}
   
];
