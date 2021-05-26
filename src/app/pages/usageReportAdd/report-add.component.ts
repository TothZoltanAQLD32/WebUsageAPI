import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.scss']
})
export class reportAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl("Letöltés", Validators.required),
    effectiveDate: new FormControl(null),
    description: new FormControl(null),
    href: new FormControl(null),
    dataConsumption: new FormControl(20, Validators.required),
    id: new FormControl(123, Validators.required),
    imageResource: new FormControl(null)
  });

  constructor(public dialogRef: MatDialogRef<reportAddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {
       name: string,
       effectiveDate: string,
       href: string,
       dataConsumption: number,
       id: number,
       imageResource: string,
       description: string
      }
    ){}

  ngOnInit(): void {
    this.form.get('name')?.setValue(this.data.name);
    this.form.get('effectiveDate')?.setValue(this.data.effectiveDate);
    this.form.get('href')?.setValue(this.data.href);
    this.form.get('dataConsumption')?.setValue(this.data.dataConsumption);
    this.form.get('id')?.setValue(this.data.id);
    this.form.get('imageResource')?.setValue(this.data.imageResource);
    this.form.get('description')?.setValue(this.data.description);
  }

  close(): void {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }

}