import { GetModelListResponse } from '../../../models/responses/get-model-list-response';
import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../../services/concretes/model.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { BrandListGroupComponent } from '../../brands/brand-list-group/brand-list-group.component';

@Component({
  selector: 'app-model-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule,BrandListGroupComponent],
  templateUrl: './model-list-group.component.html',
  styleUrl: './model-list-group.component.scss'
})
export class ModelListGroupComponent implements OnInit {
  models!:GetModelListResponse[];
  filterText="";
  currentModel!:GetModelListResponse;
  constructor(private modelService:ModelService){}
  ngOnInit(): void {
    
  }

  onBrandAdded(brandId:string){
    if(brandId){
      this.modelService.getListByBrandId(brandId).subscribe(models=>{
        this.models=models;
      })
    }
  }

  getModels(brandId:string){
    this.modelService.getListByBrandId(brandId).subscribe((response)=>{
      this.models=response;
    })
  }

  setCurrentModel(model:GetModelListResponse){
    this.currentModel=model;
  }

  getCurrentModelClass(model:GetModelListResponse){
    if(model==this.currentModel){
      return "list-group-item active"
    }else{
     return "list-group-item"
    }
  }

  getDefaultModelClass(){
    if(!this.currentModel){
      return "list-group-item list-group-item-info"
    }else{
      return "list-group-item"
    }
  }


}
