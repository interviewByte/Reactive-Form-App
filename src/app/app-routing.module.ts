import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegigterComponent } from './components/regigter/regigter.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { CrudComponent } from './components/crud/crud.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'register', component: RegigterComponent },
  { path: 'select', component: SelectFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: 'crud-operation', component: CrudComponent },
  { path: 'table', component: TableDataComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
