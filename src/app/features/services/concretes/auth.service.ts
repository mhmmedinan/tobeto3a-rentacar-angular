import { Injectable } from '@angular/core';
import { AuthBaseService } from '../abstracts/auth-base.service';
import { Observable } from 'rxjs';
import { UserForRegisterRequest } from '../../models/requests/users/user-for-register-request';
import { UserForRegisterResponse } from '../../models/responses/users/user-for-register-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthBaseService {
  fullname!:string;
  userId!:string;
  token:any;
  jwtHelper:JwtHelperService = new JwtHelperService;


  private readonly apiUrl:string = `${environment.API_URL}/auth`
  constructor(private httpClient:HttpClient,private storageService:LocalStorageService) {super() }

  override register(userforRegisterRequest: UserForRegisterRequest)
      :Observable<UserForRegisterResponse> {
    return this.httpClient.post<UserForRegisterResponse>(`${this.apiUrl}/register`,userforRegisterRequest)
  }

  
}
