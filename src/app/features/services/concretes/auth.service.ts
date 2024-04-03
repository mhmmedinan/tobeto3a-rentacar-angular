import { Injectable } from '@angular/core';
import { AuthBaseService } from '../abstracts/auth-base.service';
import { Observable } from 'rxjs';
import { UserForRegisterRequest } from '../../models/requests/users/user-for-register-request';
import { UserForRegisterResponse } from '../../models/responses/users/user-for-register-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/auth`
  constructor(private httpClient:HttpClient) {super() }

  override register(userforRegisterRequest: UserForRegisterRequest)
      :Observable<UserForRegisterResponse> {
    return this.httpClient.post<UserForRegisterResponse>(this.apiUrl+"register",userforRegisterRequest)
  }

  
}
