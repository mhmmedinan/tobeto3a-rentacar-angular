import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../features/services/concretes/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  menuItems!:MenuItem[];
  userLogged!:boolean;
  constructor(private authService:AuthService,private router:Router){}
   ngOnInit(): void {
     this.getMenuItems();
     console.log(this.getUserName());
     console.log(this.getUserId())
   }

   logOut(){
    this.authService.logOut();
    this.router.navigate(['home-page'])
   }
   
   setUserLogged() :boolean{
    return this.userLogged=this.authService.loggedIn()
   }

   getUserName():string{
    return this.authService.getUserName();
   }

   getUserId():string{
    return this.authService.getCurrentUserId();
   }



   async getMenuItems(){
    if(this.authService.loggedIn()==true){
    this.menuItems=[
      {
        label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
      }, 
      
      {
        label:"Kiralanan Arabalar",icon:"pi pi-car",routerLink:'rent-car'
      },
      {
        label:"Çıkış Yap",icon:"pi pi-sign-out",command:()=>{
          this.logOut()
        }
      },
      {
        label:this.getUserName(),icon:"pi pi-user",routerLink:'profil'
      },
    
    ]}
    else{
      this.menuItems=[
        {
          label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
        },
        {
          label:"Arabalar",icon:"pi pi-car",routerLink:'car-list'
        },
        {
          label:"Giriş Yap",icon:"pi pi-sign-in",routerLink:'login'
        },
        {
          label:"Kayıt Ol",icon:"pi pi-user-plus",routerLink:'register'
        }
      ]
    }
   }
   

}
