import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const mixRouter: Routes = [
  { path: 'recForm', component: ReactiveFormComponent },
];

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mixRouter),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MixedModule {}
