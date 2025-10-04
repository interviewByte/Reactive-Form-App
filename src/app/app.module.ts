import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { RegigterComponent } from './components/regigter/regigter.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { AddDelFormComponent } from './components/add-del-form/add-del-form.component';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './services/init.service';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TodosComponent,
    RegigterComponent,
    SelectFormComponent,
    DynamicFormComponent,
    AddDelFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
