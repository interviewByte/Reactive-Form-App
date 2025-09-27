import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentData = [
    {
      id: 1,
      name: 'Alice',
      role: 'Manager',
      email: 'alice@test.com',
      location: 'Bangalore',
    },
    {
      id: 2,
      name: 'Bob',
      role: 'Lead',
      email: 'bob@test.com',
      location: 'Hyderabad',
    },
    {
      id: 3,
      name: 'Charlie',
      role: 'Architect',
      email: 'charlie@test.com',
      location: 'Chennai',
    },
  ];
}
