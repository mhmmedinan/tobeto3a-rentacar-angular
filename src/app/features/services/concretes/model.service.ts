import { Injectable } from '@angular/core';
import { ModelBaseService } from '../abstracts/model-base.service';
import { Observable } from 'rxjs';
import { GetModelListResponse } from '../../models/responses/get-model-list-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends ModelBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/models`
  constructor(private httpClient:HttpClient) {super() }

  override getListByBrandId(brandId:string): Observable<GetModelListResponse[]> {
    return this.httpClient.get<GetModelListResponse[]>(`${this.apiUrl}/`+brandId);
  }

}
