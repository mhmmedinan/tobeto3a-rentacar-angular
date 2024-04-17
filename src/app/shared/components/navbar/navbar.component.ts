import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../features/services/concretes/auth.service';
import { Router } from '@angular/router';
import { AuthBaseService } from '../../../features/services/abstracts/auth-base.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  menuItems!:MenuItem[];
  userLogged!:boolean;
  constructor(private authService:AuthBaseService,private router:Router){}
   ngOnInit(): void {
     this.getMenuItems();
     console.log(this.getUserName());
     console.log(this.getUserId())
     console.log(this.authService.getRoles())
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
    const isLoggedIn = await this.authService.loggedIn();
    if(isLoggedIn){
    this.menuItems=[
      {
        label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
      }, 
      {
        label:"Marka Ekle",icon:"pi pi-plus",routerLink:'add-brand'
      }, 
      {
        label:"Arabalar",icon:"pi pi-car",routerLink:'car-list'
      },
      {
        label:"Çıkış Yap",icon:"pi pi-sign-out",command:()=>{
          this.logOut()
        }
      },
      {
        label:await this.getUserName(),icon:"pi pi-user",routerLink:'profil'
      },
    
    ]}
    else{
      this.menuItems=[
        {
          label:"AnaSayfa",icon:"pi pi-home",routerLink:'home-page'
        },
        {
          label:"Arabalar",icon:"pi pi-car"
        },
        {
          label:"Giriş Yap",icon:"pi pi-sign-in",routerLink:'login'
        },
        {
          label:"Kayıt Ol",icon:"pi pi-user-plus",routerLink:'register'
        }
      ]
    }
    if(this.authService.isAdmin()){
      this.menuItems.push(
      {
        label:"Admin Panel",routerLink:'admin'
      },
    )
    }
   }
   

}
