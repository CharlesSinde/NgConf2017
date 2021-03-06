import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ver1Component } from './components-ex/ver1/ver1.component';
import { Ver2Component } from './components-ex/ver2/ver2.component';
import { Ver2c1Component } from './components-ex/ver2/ver2c1/ver2c1.component';
import { Ver3Component } from './components-ex/ver3/ver3.component';
import { Ver3c1Component } from './components-ex/ver3/ver3c1/ver3c1.component';
import { V3ServiceService } from 'app/components-ex/ver3/services/v3-service.service';
import { ComponentsExComponent } from './components-ex/components-ex/components-ex.component';
import { StyleExComponent } from './style-ex/style-ex/style-ex.component';
import { HomeComponent } from './home/home.component';
import { RoutingExComponent } from './routing-ex/routing-ex.component';
import { ChildExModule } from './child-ex/child-ex/child-ex.module';
import { TestingComponent } from './testing/testing.component';
import { ObservablesComponent } from './observables/observables.component';
import { SwapiService } from 'app/observables/swapi.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Ver1Component,
    Ver2Component,
    Ver2c1Component,
    Ver3Component,
    Ver3c1Component,
    ComponentsExComponent,
    StyleExComponent,
    HomeComponent,
    RoutingExComponent,
    TestingComponent,
    ObservablesComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChildExModule,
    AppRoutingModule,
  ],
  providers: [V3ServiceService,SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
