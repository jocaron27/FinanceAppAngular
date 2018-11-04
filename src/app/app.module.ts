import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseGoalComponent } from './expense-goal/expense-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseGoalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
