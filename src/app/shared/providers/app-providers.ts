import { AuthService } from './../../features/services/concretes/auth.service';
import { AuthBaseService } from "../../features/services/abstracts/auth-base.service";
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '../../core/interceptors/Auth/auth.interceptor';
import { BrandBaseService } from '../../features/services/abstracts/brand-base.service';
import { BrandService } from '../../features/services/concretes/brand.service';

export function getAppProviders(){
    const authServiceProviders={
        provide:AuthBaseService,
        useClass:AuthService
    };

    const brandServiceProviders={
        provide:BrandBaseService,
        useClass:BrandService
    };

    return [
        authServiceProviders,
        brandServiceProviders,
        provideRouter(routes),
        provideHttpClient(withInterceptors([AuthInterceptor]))
    ]
}