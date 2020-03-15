import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Output()
  showRegistration = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public openRegistrationWindow(): void {
    this.showRegistration.emit();
  }
}
