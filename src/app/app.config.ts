import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/Auth/auth.interceptor';
import { AuthBaseService } from './features/services/abstracts/auth-base.service';
import { AuthService } from './features/services/concretes/auth.service';
import { getAppProviders } from './shared/providers/app-providers';

export const appConfig: ApplicationConfig = {
  providers: [getAppProviders()]
  
};
