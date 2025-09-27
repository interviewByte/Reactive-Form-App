import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export interface countryName {
  id: number;
  country: string;
}
@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css'],
})
export class SelectFormComponent implements OnInit {
  country: string[] = ['India', 'USA', 'Canada', 'Australia', 'Germany'];
  stateData = {
    India: [
      'Uttar Pradesh',
      'Maharashtra',
      'Tamil Nadu',
      'Karnataka',
      'Gujarat',
      'Rajasthan',
      'Punjab',
      'Bihar',
    ],
    USA: [
      'California',
      'Texas',
      'Florida',
      'New York',
      'Illinois',
      'Pennsylvania',
      'Ohio',
      'Georgia',
    ],
    Canada: [
      'Ontario',
      'Quebec',
      'British Columbia',
      'Alberta',
      'Manitoba',
      'Saskatchewan',
      'Nova Scotia',
      'New Brunswick',
    ],
    Australia: [
      'New South Wales',
      'Victoria',
      'Queensland',
      'Western Australia',
      'South Australia',
      'Tasmania',
      'Northern Territory',
      'Australian Capital Territory',
    ],
    Germany: [
      'Bavaria',
      'Baden-Württemberg',
      'North Rhine-Westphalia',
      'Hesse',
      'Saxony',
      'Lower Saxony',
      'Thuringia',
      'Brandenburg',
    ],
  };
  states: string[] = [];
  myform = new FormGroup({
    country: new FormControl(''),
    state: new FormControl(''),
    gender: new FormControl(''),
    policy: new FormControl(false),
  });
  ngOnInit(): void {
    this.myform.get('country')?.valueChanges.subscribe((countryName) => {
      // this.states = this.stateData[countryName as keyof typeof this.stateData];
      this.states = countryName
        ? this.stateData[countryName as keyof typeof this.stateData]
        : [];
      // this.states = countryName ? this.stateData[countryName as string] : [];
      this.myform.get('state')?.setValue('');
    });
  }
  handleSubmit() {
    console.log('form-data', this.myform.value);
  }
}
