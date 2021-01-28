import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importing customers module into the root module which is app.module.ts
import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CustomersModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 
