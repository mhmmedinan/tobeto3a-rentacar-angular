import { Component, OnInit } from '@angular/core';
import { GetListBrandResponse } from '../../../models/responses/brands/get-brand-list-response';
import { BrandBaseService } from '../../../services/abstracts/brand-base.service';
import { DeleteBrandRequest } from '../../../models/requests/brands/delete-brand-request';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss'
})
export class BrandListComponent implements OnInit {
  brands!:GetListBrandResponse[];
  constructor(private brandService:BrandBaseService){}
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getList().subscribe((response)=>{
     this.brands=response;
    })
 }

 delete(id:string){
  this.brandService.delete(id).subscribe({
    next:(response)=>{
      alert("Silindi"+response.id)
    },
    error:(error)=>{
      alert("Silinemedi");
    },
    complete:()=>{
      this.getBrands();
    }
  })
 }

 
}
