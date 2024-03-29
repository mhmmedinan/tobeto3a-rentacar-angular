import { GetModelListResponse } from './../../features/models/responses/get-model-list-response';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterPipe'
})
export class FilterModelPipe implements PipeTransform{

    transform(value: GetModelListResponse[],filterText:string):GetModelListResponse[] {
        filterText=filterText?filterText.toLocaleLowerCase():""
        return filterText?value.filter((m:GetModelListResponse)=>m.name.toLocaleLowerCase()
        .indexOf(filterText)!==-1):value;
    }

}