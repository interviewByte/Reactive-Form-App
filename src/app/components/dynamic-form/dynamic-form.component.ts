import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormData: any[] = [
    { key: 'name', type: 'text', value: 'Pavan' },
    { key: 'email', type: 'email', value: 'pavan@example.com' },
    { key: 'age', type: 'number', value: 25 },
  ];
  dynamicForm!: FormGroup;
  ngOnInit(): void {
    this.createForm(this.dynamicFormData);
  }
  createForm(fileds: any) {
    const group: any = {};
    fileds.forEach((element: any) => {
      group[element.key] = new FormControl(element.value || '');
    });
    this.dynamicForm = new FormGroup(group);
  }
  handleSubmit() {
    console.log(this.dynamicForm.value);
  }
}
