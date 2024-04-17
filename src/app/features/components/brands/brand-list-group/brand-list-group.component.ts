import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrandService } from '../../../services/concretes/brand.service';
import { GetListBrandResponse } from '../../../models/responses/brands/get-brand-list-response';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { BrandBaseService } from '../../../services/abstracts/brand-base.service';

@Component({
  selector: 'app-brand-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './brand-list-group.component.html',
  styleUrl: './brand-list-group.component.scss'
})
export class BrandListGroupComponent implements OnInit{

  @Input() selectedBrandId!:string; //seçilen markanın kimliği
  @Output() brandSelected = new EventEmitter<string>(); //markalar yüklendiğinde olay yayınlayıcı
  brands!:GetListBrandResponse[];
  currentBrand!:GetListBrandResponse;
  filterText="";
  constructor(private brandService:BrandBaseService){}
  
  ngOnInit(): void {
    this.getBrands();
    console.log(this.brandSelected)
  }

  onSelectedBrand(brandId:string):void{
    this.selectedBrandId=brandId;
    this.brandSelected.emit(this.selectedBrandId);
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
