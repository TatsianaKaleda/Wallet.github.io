import {Component, Input, OnInit, Output} from "@angular/core";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // profitsControl = new FormControl('', Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  // profits: Profits[] = [
  //   {name: 'Credit card'},
  //   {name: 'Salary'},
  //   {name: 'Savings money'},
  //   {name: 'Cash'},
  //   {name: ' Premium'},
  // ];

}
