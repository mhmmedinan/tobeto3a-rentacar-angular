import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandBaseService } from '../../../services/abstracts/brand-base.service';
import { CreateBrandRequest } from '../../../models/requests/brands/create-brand-request';
import { BrandListComponent } from '../brand-list/brand-list.component';

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [ReactiveFormsModule,BrandListComponent],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddBrandFormComponent implements OnInit {
  brandForm!:FormGroup
  formMessage:string | null=null;

  constructor(private formBuilder:FormBuilder,private brandService:BrandBaseService,
    private router:Router,private change:ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.brandForm=this.formBuilder.group({
      name:['',[Validators.required]]
    })
  }

  add(){
    if(this.brandForm.valid){
      let brandModel:CreateBrandRequest = Object.assign({},this.brandForm.value);
      this.brandService.add(brandModel).subscribe({
        //next => observable'dan gelen veri yakaladığımız fonksiyon
        next:(response)=>{
         alert(response.name)
        },
        error:(error)=>{
          this.formMessage="Eklenemedi";
          this.change.markForCheck();
        },
        complete:()=>{
          this.formMessage="Başarıyla Eklendi";
          this.brandForm.reset();
          this.change.markForCheck();

          setTimeout(()=>{
            this.router.navigate(['/brand-list'])
          },2000)
        }
      })
    }}

    onFormSubmit(){
      if(this.brandForm.invalid){
        this.formMessage="lütfen gerekli alanları doldurun";
        return;
      }

      this.add();
    }

}
