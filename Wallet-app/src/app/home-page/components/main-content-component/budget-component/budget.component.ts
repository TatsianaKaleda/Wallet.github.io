import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  @Output()
  showBudget = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public openBudgetWindow(): void {
    this.showBudget.emit();
  }
}
