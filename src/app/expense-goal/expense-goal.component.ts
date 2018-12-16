import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';

type nameValuePair = { name: string, value: number };
@Component({
  selector: 'app-expense-goal',
  templateUrl: './expense-goal.component.html',
  styleUrls: ['./expense-goal.component.scss']
})
export class ExpenseGoalComponent implements OnInit, OnChanges {

  @Input()
  public data: nameValuePair[];
  public total: number;
  public columns: TableColumn[];

  constructor() { }

  ngOnInit() {
    // Configure table column settings
    this.columns = [
      {
        prop: 'name'
      },
      {
        prop: 'value'
      }
    ];
    // Calculate total of data values
    this.calculateTotal();
  }

  ngOnChanges(changeObj) {
    if (changeObj.data) {
      this.calculateTotal();
      this.addTotalToTable();
    }
  }

  /** Adds all values in the data */
  calculateTotal() {
    this.total = this.data.reduce((acc, expense) => acc + expense.value, 0);
  }

  /** Adds total value to table by pushing to data */
  addTotalToTable() {
    this.data.push({ name: 'Total', value: this.total });
  }

}
