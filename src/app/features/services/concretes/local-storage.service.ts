import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key:string,data:any){
    localStorage.setItem(key,data);
  }

  remove(key:string){
    localStorage.removeItem(key);
  }

  get(key:string){
    localStorage.getItem(key);
  }


  setToken(token:string){
    this.set("token",token)
  }

  removeToken(){
    this.remove("token")
  }

  getToken(){
    this.get("token")
  }
}
