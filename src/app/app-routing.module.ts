import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { CApplicationComponent } from './curd/c-application/c-application.component';
import { CURDModule } from './curd/curd.module';
import { Form1Component } from './curd/forms/form1/form1.component';
import { GridsComponent } from './grids/grids.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './grids/laptop/laptop.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LoginComponent } from './login/login.component';
import { MainCompComponent } from './Subject/main-comp/main-comp.component';
import { MobileComponent } from './grids/mobile/mobile.component';
import { NgcontentComponent } from './NgContent-NgContainer/ngcontent/ngcontent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './InPut-OutPut/parent/parent.component';
import { ParentTestComponent } from './Test/parent-test/parent-test.component';
import { PostDataComponent } from './curd/forms/post-data/post-data.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StudentDetailsComponent } from './Detail/student-details/student-details.component';
import { StudentListComponent } from './Detail/student-list/student-list.component';
import { TabelDataComponent } from './curd/forms/tabel-data/tabel-data.component';
import { UpdateDataComponent } from './curd/forms/update-data/update-data.component';
import { UxproductComponent } from './curd/UX-CURD/uxproduct/uxproduct.component';
import { ViewComponent } from './ViewChild/view/view.component';

const appRouting: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'grid',
    children: [
      { path: '', component: GridsComponent },
      { path: 'mob', component: MobileComponent },
      { path: 'lap', component: LaptopComponent },
    ],
  },
  { path: 'capp', component: CApplicationComponent },
  { path: 'hook', component: LifeCycleComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'content', component: NgcontentComponent },
  { path: 'test', component: ParentTestComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'subj', component: MainCompComponent },
  { path: 'view', component: ViewComponent },
  { path: 'form1', component: Form1Component },
  { path: 'tData', component: TabelDataComponent },
  { path: 'uData', component: UpdateDataComponent },
  { path: 'pData', component: PostDataComponent },
  { path: 'uxCurd', component: UxproductComponent },
  { path: 'sList', component: StudentListComponent },
  { path: 'sList/:id', component: StudentDetailsComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'mixed',
    loadChildren: () =>
      import('./mixed/mixed.module').then((mode) => mode.MixedModule),
  },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
