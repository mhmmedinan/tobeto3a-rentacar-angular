import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/concretes/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private authService:AuthService,
    private router:Router){}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
   this.registerForm=this.formBuilder.group({
    firstName:["",Validators.required],  
    lastName:["",Validators.required],  
    email:["",Validators.required],
    password:["",Validators.required]
   })
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let registerModel = Object.assign({},this.registerForm.value);
      this.authService.register(registerModel).subscribe((response)=>{
        alert("Kayıt Başarılı")
        this.router.navigate(['login']);
      }, (errorResponse: any) => { 
          errorResponse.error.Errors.forEach((error: any) => {
            console.error(`Property: ${error.Property}`);
            error.Errors.forEach((errorMessage: string) => {
              alert(`Error: ${errorMessage}`);
            });
          });
        })
    }
  }

}
