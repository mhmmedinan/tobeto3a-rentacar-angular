import { Injectable, model } from '@angular/core';
import { CarBaseService } from '../abstracts/car-base.service';
import { Observable, map } from 'rxjs';
import { PageRequest } from '../../../core/models/page-request';
import { CarListItemDto } from '../../models/responses/cars/car-list-item-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService extends CarBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/cars`
  constructor(private httpClient:HttpClient) {super() }

  override getList(pageRequest: PageRequest): Observable<CarListItemDto> {
    const newRequest :{[key:string]:string | number}={
      page:pageRequest.page,
      pageSize:pageRequest.pageSize
    };

    return this.httpClient.get<CarListItemDto>(this.apiUrl,{
      params:newRequest
    }).pipe(
      map((response)=>{
        const newResponse:CarListItemDto={
          index:pageRequest.page,
          size:pageRequest.pageSize,
          count:response.count,
          hasNext:response.hasNext,
          hasPrevious:response.hasPrevious,
          items:response.items,
          pages:response.pages
        };
        return newResponse;
      })
    )
  }


  override getCarListByModelId(pageRequest: PageRequest,modelId:string): Observable<CarListItemDto> {
    const newRequest :{[key:string]:string | number}={
      page:pageRequest.page,
      pageSize:pageRequest.pageSize,
      modelId:modelId
    };

    return this.httpClient.get<CarListItemDto>(`${this.apiUrl}/getcarbymodel`,{
      params:newRequest
    }).pipe(
      map((response)=>{
        const newResponse:CarListItemDto={
          index:pageRequest.page,
          size:pageRequest.pageSize,
          count:response.count,
          hasNext:response.hasNext,
          hasPrevious:response.hasPrevious,
          items:response.items,
          pages:response.pages
        };
        return newResponse;
      })
    )
  }
}
