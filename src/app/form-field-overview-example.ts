import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  newForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newForm = new FormGroup({
      items: new FormArray([]),
    });
  }

  addItem(): void {
    this.items = this.newForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      level: '',
    });
  }
}
