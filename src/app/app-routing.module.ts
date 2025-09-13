import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegigterComponent } from './components/regigter/regigter.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'register', component: RegigterComponent },
  { path: 'select', component: SelectFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
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
