import { GetCarsListResponse } from './get-cars-list-response';
import { PageResponse } from "../../../../core/models/page-response";

export interface CarListItemDto extends PageResponse{
    items:GetCarsListResponse[]
}