import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsBadgeModule } from '@libs/rds-badge';

@NgModule({
  declarations: [
    RdsDropdownlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule,
    RdsBadgeModule
  ],
  exports: [
    RdsDropdownlistComponent
  ]
})
export class RdsDropdownlistModule { }
