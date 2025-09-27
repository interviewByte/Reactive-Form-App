import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { RegigterComponent } from './components/regigter/regigter.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { CrudComponent } from './components/crud/crud.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { StringPipePipe } from './pipes/string-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TodosComponent,
    RegigterComponent,
    SelectFormComponent,
    DynamicFormComponent,
    CrudComponent,
    ParentComponent,
    ChildComponent,
    TableDataComponent,
    StringPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
