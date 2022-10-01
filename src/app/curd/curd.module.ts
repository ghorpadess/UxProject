import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CApplicationComponent } from './c-application/c-application.component';
import { CommonModule } from '@angular/common';
import { CurdAllServiceService } from './forms/curd-all-service.service';
import { CurdService } from './UX-CURD/curd.service';
import { Form1Component } from './forms/form1/form1.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostDataComponent } from './forms/post-data/post-data.component';
import { SharedModule } from '../shared/shared.module';
import { TabelDataComponent } from './forms/tabel-data/tabel-data.component';
import { UpdateDataComponent } from './forms/update-data/update-data.component';
import { UxproductComponent } from './UX-CURD/uxproduct/uxproduct.component';

@NgModule({
  declarations: [
    CApplicationComponent,
    UxproductComponent,
    Form1Component,
    TabelDataComponent,
    UpdateDataComponent,
    PostDataComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [CurdService, CurdAllServiceService],
})
export class CURDModule {}
