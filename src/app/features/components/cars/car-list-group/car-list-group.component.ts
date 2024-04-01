import { CommonModule } from '@angular/common';
import { PageRequest } from '../../../../core/models/page-request';
import { CarService } from '../../../services/concretes/car.service';
import { CarListItemDto } from './../../../models/responses/cars/car-list-item-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list-group.component.html',
  styleUrl: './car-list-group.component.scss'
})
export class CarListGroupComponent implements OnInit {
  carList!:CarListItemDto;
  constructor(private carService:CarService){}
  readonly PAGE_SIZE=8;
  ngOnInit(): void {
    this.getList({page:0,pageSize:this.PAGE_SIZE});
  }


  getList(pageRequest:PageRequest){
    this.carService.getList(pageRequest).subscribe((response)=>{
      this.carList=response;
    })
  }

}
