import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(
      [
        { path: '', component: IndexComponent }
      ]
    ),
  ]
})
export class IndexModule { }
