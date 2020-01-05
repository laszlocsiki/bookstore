import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-book-dialog',
  templateUrl: './create-book-dialog.component.html',
  styleUrls: ['./create-book-dialog.component.scss']
})
export class CreateBookDialogComponent implements OnInit {

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required],
    imageURL: [''],
  });

  constructor(public dialogRef: MatDialogRef<CreateBookDialogComponent>, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  get f() {
    return this.form.controls;
  }


  close(): void {
    this.dialogRef.close();
  }
}
