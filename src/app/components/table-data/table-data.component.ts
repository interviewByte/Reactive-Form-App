import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  @Input() tableData: any[] = [];
  ngOnInit(): void {
    if (!(this.tableData.length > 0)) {
      this.tableData = [
        {
          productId: 'P001',
          productName: 'Laptop',
          category: 'Electronics',
          price: 55000,
          stock: 20,
        },
        {
          productId: 'P002',
          productName: 'Mobile',
          category: 'Electronics',
          price: 25000,
          stock: 50,
        },
        {
          productId: 'P003',
          productName: 'Chair',
          category: 'Furniture',
          price: 3000,
          stock: 100,
        },
      ];
    }
  }
}
