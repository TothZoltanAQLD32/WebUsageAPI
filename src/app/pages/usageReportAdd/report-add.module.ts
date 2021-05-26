import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reportAddComponent } from './report-add.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [reportAddComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDialogModule,
  ]
})
export class reportAddModule { }
