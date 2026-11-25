import { provideZoneChangeDetection, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AuthInterceptorProvider } from "./app/auth/interceptors/auth.interceptor";
import { provideHttpClient, withInterceptorsFromDi, withXhr } from "@angular/common/http";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/routes";


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ToastrModule.forRoot(), ReactiveFormsModule),
        AuthInterceptorProvider, provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
