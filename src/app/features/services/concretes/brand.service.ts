import { Injectable } from '@angular/core';
import { BrandBaseService } from '../abstracts/brand-base.service';
import { Observable } from 'rxjs';
import { GetListBrandResponse } from '../../models/responses/brands/get-brand-list-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CreateBrandRequest } from '../../models/requests/brands/create-brand-request';
import { CreateBrandResponse } from '../../models/responses/brands/create-brand-response';
import { DeleteBrandRequest } from '../../models/requests/brands/delete-brand-request';
import { DeleteBrandResponse } from '../../models/responses/brands/delete-brand-response';

@Injectable()
export class BrandService extends BrandBaseService {
  
  
  private readonly apiUrl:string = `${environment.API_URL}/brands`
  constructor(private httpClient:HttpClient) {super() }


  override getList(): Observable<GetListBrandResponse[]> {
    return this.httpClient.get<GetListBrandResponse[]>(this.apiUrl);
  }

  override add(request: CreateBrandRequest): Observable<CreateBrandResponse> {
    return this.httpClient.post<CreateBrandResponse>(this.apiUrl,request);
  }

  override delete(id:string): Observable<DeleteBrandResponse> {
    return this.httpClient.delete<DeleteBrandResponse>(`${this.apiUrl}/`+id)
  }

  
}
