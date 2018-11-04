import { Component, OnInit, Input } from '@angular/core';

type nameValuePair = { name: string, value: number };
@Component({
  selector: 'app-expense-goal',
  templateUrl: './expense-goal.component.html',
  styleUrls: ['./expense-goal.component.css']
})
export class ExpenseGoalComponent implements OnInit {

  @Input()
  public data: nameValuePair[];
  public total: number;

  constructor() { }

  ngOnInit() {
    console.log(this.data);

    this.total = this.data.reduce((acc, expense) => acc + expense.value, 0);
  }

}
