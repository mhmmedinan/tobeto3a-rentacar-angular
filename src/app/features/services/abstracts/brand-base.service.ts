import { Observable } from "rxjs";
import { GetListBrandResponse } from "../../models/responses/brands/get-brand-list-response";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class BrandBaseService {
   abstract getList()
         :Observable<GetListBrandResponse[]>
}