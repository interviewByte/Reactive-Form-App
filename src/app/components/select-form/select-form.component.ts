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
  country: countryName[] = [
    { id: 1, country: 'India' },
    { id: 2, country: 'USA' },
    { id: 3, country: 'Canada' },
    { id: 4, country: 'Australia' },
    { id: 5, country: 'Germany' },
  ];
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
      let countryID = this.country.filter(
        (item) => item.country === countryName
      )[0].id;
      console.log(countryID);
      // this.states = this.stateData[countryName as keyof typeof this.stateData];
      // this.myform.get('state')?.setValue('');
    });
  }
  handleSubmit() {
    console.log('form-data', this.myform.value);
  }
}
