import { Pipe, PipeTransform } from "@angular/core";
import { GetListBrandResponse } from "../../features/models/responses/brands/get-brand-list-response";

@Pipe({
    name:'filterBrandPipe'
})
export class FilterBrandPipe implements PipeTransform{

    transform(value: GetListBrandResponse[],filterText:string):GetListBrandResponse[] {
        filterText=filterText?filterText.toLocaleLowerCase():""
        return filterText?value.filter((m:GetListBrandResponse)=>m.name.toLocaleLowerCase()
        .indexOf(filterText)!==-1):value;
    }

}