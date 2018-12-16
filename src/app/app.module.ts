
// #region -------- Imports ---------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from '@app/app.component';
import { ExpenseGoalComponent } from '@app/expense-goal/expense-goal.component';
// #endregion

// #region ---------- Module ----------
@NgModule({
  declarations: [
    AppComponent,
    ExpenseGoalComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// #endregion
