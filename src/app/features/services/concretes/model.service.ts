import { Injectable } from '@angular/core';
import { ModelBaseService } from '../abstracts/model-base.service';
import { Observable } from 'rxjs';
import { GetModelListResponse } from '../../models/responses/get-model-list-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends ModelBaseService {
  apiUrl="http://localhost:5190/api/models"
  constructor(private httpClient:HttpClient) {super() }

  override getList(): Observable<GetModelListResponse[]> {
    return this.httpClient.get<GetModelListResponse[]>(this.apiUrl);
  }

}
