import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';

import { LoginComponent } from './auth/login/login.component';

import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TestRxJs } from './rxjs/test-rx-js/test-rx-js';
import { OfFromComponent } from './rxjs/of-from/of-from.component';
import { TimerExamplesComponent } from './rxjs/timer-examples/timer-examples.component';
import { SliderComponent } from './rxjs/slider/slider.component';
import { AutocompleteComponent } from './cv/autocomplete/autocomplete.component';
import { DashboardComponent } from './cv/dashboard/dashboard.component';

@NgModule({ declarations: [
        AppComponent,
        AddCvComponent,
        CvComponent,
        ListComponent,
        ItemComponent,
        DetailsCvComponent,
        CvCardComponent,
        EmbaucheComponent,
        DefaultImagePipe,
        TodoComponent,
        NavbarComponent,
        NF404Component,
        LoginComponent,
        TestRxJs,
        OfFromComponent,
        TimerExamplesComponent,
        SliderComponent,
        AutocompleteComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule], providers: [AuthInterceptorProvider, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
