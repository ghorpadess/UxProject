import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NgModule } from '@angular/core';
import { SerchBarComponent } from './serch-bar/serch-bar.component';

@NgModule({
  declarations: [
    SerchBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SerchBarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
