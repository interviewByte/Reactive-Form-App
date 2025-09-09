import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegigterComponent } from './components/regigter/regigter.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'register', component: RegigterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
