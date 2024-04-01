import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../services/concretes/brand.service';
import { GetListBrandResponse } from '../../../models/responses/brands/get-brand-list-response';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-brand-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './brand-list-group.component.html',
  styleUrl: './brand-list-group.component.scss'
})
export class BrandListGroupComponent implements OnInit{

  brands!:GetListBrandResponse[];
  currentBrand!:GetListBrandResponse;
  filterText="";
  constructor(private brandService:BrandService){}
  
  ngOnInit(): void {
    this.getBrands();
  }


  getBrands(){
     this.brandService.getList().subscribe((response)=>{
      this.brands=response;
     })
  }

  setCurrentBrand(brand:GetListBrandResponse){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:GetListBrandResponse){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }else{
     return "list-group-item"
    }
  }

  getDefaultBrandClass(){
    if(!this.currentBrand){
      return "list-group-item list-group-item-info"
    }else{
      return "list-group-item"
    }
  }



}
