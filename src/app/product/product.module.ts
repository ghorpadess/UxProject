import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'prd', component: ProductDetailsComponent }
]

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    SharedModule
  ],
  exports: [

  ]
})
export class ProductModule { }
