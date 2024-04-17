import { AuthService } from './../../services/concretes/auth.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserForLoginRequest } from '../../models/requests/users/user-for-login-request';
import { Router } from '@angular/router';
import { AuthBaseService } from '../../services/abstracts/auth-base.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private authService: AuthBaseService, private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel: UserForLoginRequest = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe({
        error:(error)=>{
          alert(error.error);
        },
        complete:()=>{
          alert("Giriş Yapıldı");
          setTimeout(()=>{
            this.router.navigate(["/home-page"]);
          },2000)
        }
      })
    }
  }
}
