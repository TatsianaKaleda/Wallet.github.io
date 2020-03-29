import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {CookieService} from "ngx-cookie-service";
import {AuthorizationService} from "../login-page/service/getUserData.service";
import {UserModel} from "../login-page/models/user.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class HomePageComponent implements OnInit {

  public currentUser: UserModel[];

  constructor(private cookieService: CookieService,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    let email = this.cookieService.get("email");
    this.getCurrentUser(email);
  }

  public getCurrentUser(email: string): void {
    this.authorizationService.getUserData(email)
      .subscribe(
        (response) => {
          if (response) {
            if (response.length != 0) {
              this.currentUser = response;
            }
          }
        },
        (error) => {
          console.error('error caught in component') //ошибка на сервере
        }
      );
  }

}
