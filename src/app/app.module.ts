import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from './NgContent-NgContainer/cards/cards.component';
import { Child1Component } from './ViewChild/child1/child1.component';
import { ChildComponent } from './life-cycle/child/child.component';
import { ChildComponentComponent } from './InPut-OutPut/child/child.component';
import { ChildTestAdminComponent } from './Test/child-test-admin/child-test-admin.component';
import { ChildTestUserComponent } from './Test/child-test-user/child-test-user.component';
import { Comp1Component } from './Subject/comp1/comp1.component';
import { Comp2Component } from './Subject/comp2/comp2.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { GridsComponent } from './grids/grids.component';
import { HttpClientModule } from '@angular/common/http';
import { LaptopComponent } from './grids/laptop/laptop.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LoginComponent } from './login/login.component';
import { MainCompComponent } from './Subject/main-comp/main-comp.component';
import { MobileComponent } from './grids/mobile/mobile.component';
import { NgModule } from '@angular/core';
import { NgcontentComponent } from './NgContent-NgContainer/ngcontent/ngcontent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './InPut-OutPut/parent/parent.component';
import { ParentTestComponent } from './Test/parent-test/parent-test.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SharedModule } from './shared/shared.module';
import { StudentDetailsComponent } from './Detail/student-details/student-details.component';
import { StudentListComponent } from './Detail/student-list/student-list.component';
import { ViewComponent } from './ViewChild/view/view.component';
import { HomeComponent } from './home/home.component';
import { TestDirective } from './ViewChild/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    ChildComponent,
    GridsComponent,
    PageNotFoundComponent,
    MobileComponent,
    LaptopComponent,
    ParentComponent,
    ChildComponentComponent,
    NgcontentComponent,
    CardsComponent,
    ParentTestComponent,
    ChildTestUserComponent,
    ChildTestAdminComponent,
    ProductListComponent,
    MainCompComponent,
    Comp1Component,
    Comp2Component,
    ViewComponent,
    Child1Component,
    LoginComponent,


    FilterPipe,
    StudentListComponent,
    StudentDetailsComponent,
    HomeComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
