import { Observable } from "rxjs";
import { PageRequest } from "../../../core/models/page-request";
import { CarListItemDto } from "../../models/responses/cars/car-list-item-dto";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class CarBaseService{
    abstract getList(pageRequest:PageRequest):Observable<CarListItemDto>
}