import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  childData = [
    { id: 101, name: 'David', grade: 'A', email: 'david@test.com', age: 15 },
    { id: 102, name: 'Eva', grade: 'B', email: 'eva@test.com', age: 14 },
    { id: 103, name: 'Frank', grade: 'A', email: 'frank@test.com', age: 16 },
  ];
}
