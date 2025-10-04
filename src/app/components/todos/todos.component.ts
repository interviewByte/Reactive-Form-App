import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todiList: TodoItem[] = [];
  newTask: string = '';
  subscription!: Subscription;
  constructor(public service: ProductsService) {}
  ngOnInit(): void {
    this.subscription = this.service.getProducts().subscribe({
      next: (res) => {
        console.log('res:', res);
      },
      error: (err) => {
        console.log('error:', err);
      },
    });
  }
  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };
      this.todiList.push(newTodoItem);
      this.newTask = '';
    }
  }
  deleteTask(id: number): void {
    this.todiList = this.todiList.filter((item) => item.id !== id);
  }
  toggleComplete(index: number): void {
    this.todiList[index].completed = !this.todiList[index].completed;
  }
}
