import { Injectable } from '@angular/core';
import { BrandBaseService } from '../abstracts/brand-base.service';
import { Observable } from 'rxjs';
import { GetListBrandResponse } from '../../models/responses/brands/get-brand-list-response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BrandBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/brands`
  constructor(private httpClient:HttpClient) {super() }


  override getList(): Observable<GetListBrandResponse[]> {
    return this.httpClient.get<GetListBrandResponse[]>(this.apiUrl);
  }


  
}
