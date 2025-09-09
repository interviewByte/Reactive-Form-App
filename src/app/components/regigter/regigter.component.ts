import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regigter',
  templateUrl: './regigter.component.html',
  styleUrls: ['./regigter.component.css'],
})
export class RegigterComponent {
  myform = new FormGroup({
    name: new FormControl('', [Validators.minLength(5), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });
  handleSubmit() {
    console.log('form data', this.myform.value);
  }
}
