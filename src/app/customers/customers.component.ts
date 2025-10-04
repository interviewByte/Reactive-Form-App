import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  id!: number;
  constructor(public router: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.router.snapshot.params['customer_id'];
    // this.router.params.subscribe((params) => {
    //   this.id = params['customer_id'];
    // });
  }
}
