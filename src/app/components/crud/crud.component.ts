import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  users: any[] = [];
  endURL = 'users';
  constructor(public service: CrudService) {}
  myform = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', []),
    password: new FormControl('', []),
    confirmPassword: new FormControl('', []),
  });
  handelSubmit(): void {
    this.service.register(this.myform.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }
  ngOnInit(): void {
    this.service.allusers(this.endURL).subscribe({
      next: (res) => {
        if (res) {
          console.log('res', res);
          this.users = res.user.allusers;
        }
      },
      error: (err) => {
        console.log('Error:', err);
      },
    });
  }
}
