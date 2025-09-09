import { Component } from '@angular/core';

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
export class TodosComponent {
  todiList: TodoItem[] = [];
  newTask: string = '';

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
