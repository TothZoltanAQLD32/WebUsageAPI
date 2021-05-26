import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageReportsComponent } from './usage-reports.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [UsageReportsComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule
  ],
  exports: [UsageReportsComponent]
})
export class UsageReportModule { }
