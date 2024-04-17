import { Observable } from "rxjs";
import { GetListBrandResponse } from "../../models/responses/brands/get-brand-list-response";
import { Injectable } from "@angular/core";
import { CreateBrandRequest } from "../../models/requests/brands/create-brand-request";
import { CreateBrandResponse } from "../../models/responses/brands/create-brand-response";
import { DeleteBrandRequest } from "../../models/requests/brands/delete-brand-request";
import { DeleteBrandResponse } from "../../models/responses/brands/delete-brand-response";

@Injectable({
      providedIn: 'root'
    })
export abstract class BrandBaseService {
   abstract getList()
         :Observable<GetListBrandResponse[]>;
   abstract add(request:CreateBrandRequest)
          :Observable<CreateBrandResponse>;
   abstract delete(id:string)
          :Observable<DeleteBrandResponse>;
}