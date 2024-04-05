import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/Auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    provideRouter(routes),
    provideHttpClient()
    ]
};
