import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { routes } from './app.routes';
import { ModelService } from './features/services/concretes/model.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),HttpClientModule]
};
