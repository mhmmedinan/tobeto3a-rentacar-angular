import { CommonModule } from '@angular/common';
import { PageRequest } from '../../../../core/models/page-request';
import { CarService } from '../../../services/concretes/car.service';
import { CarListItemDto } from './../../../models/responses/cars/car-list-item-dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list-group.component.html',
  styleUrl: './car-list-group.component.scss'
})
export class CarListGroupComponent implements OnInit {

  currentPageNumber!:number;
  carList:CarListItemDto={
    index:0,
    size:0,
    count:0,
    hasNext:false,
    hasPrevious:false,
    pages:0,
    items:[]
  };
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute){}
  readonly PAGE_SIZE=6;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["modelId"]){
        this.getCarListByModel({page:0,pageSize:this.PAGE_SIZE},params["modelId"])
      }else{this.getList({page:0,pageSize:this.PAGE_SIZE})}
    })
    
  }


  getList(pageRequest:PageRequest){
    this.carService.getList(pageRequest).subscribe((response)=>{
      this.carList=response;
      this.updateCurrentPageNumber();
    })
    
  }

  getCarListByModel(pageRequest:PageRequest,modelId:string){
    this.carService.getCarListByModelId(pageRequest,modelId).subscribe((response)=>{
      this.carList=response;
      this.updateCurrentPageNumber();
    })
  }

  onViewMoreClicked():void{
    const nextPageIndex = this.carList.index+1;
    const pageSize = this.carList.size;

    this.getList({page:nextPageIndex,pageSize})
    this.updateCurrentPageNumber();
  }

  onPreviousPageClicked():void{
    const previousPageIndex = this.carList.index-1;
    const pageSize = this.carList.size;
    this.getList({page:previousPageIndex,pageSize});
    this.updateCurrentPageNumber();
  }

  updateCurrentPageNumber():void{
    this.currentPageNumber=this.carList.index+1;
  }

}
