import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetModelListResponse } from '../../models/responses/get-model-list-response';

@Injectable()
export abstract class ModelBaseService {
  
  abstract getList()
      :Observable<GetModelListResponse[]>;
}
