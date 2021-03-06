import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {CookieService} from "ngx-cookie-service";
import {AuthorizationService} from "../login-page/service/getUserData.service";
import {UserModel} from "../login-page/models/user.model";
import {NavigationEnum} from "../constants/navigation.enum";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
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

  public currentUser: UserModel;
  public navigationEnum = NavigationEnum;
  public activePage: string;

  constructor(private cookieService: CookieService,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.activePage = this.navigationEnum.report;
    let email = this.cookieService.get("email");
    this.getCurrentUser(email);
  }

  public getCurrentUser(email: string): void {
    this.authorizationService.getUserData(email)
      .subscribe(
        (response) => {
          if (response) {
            if (response.length != 0) {
              this.currentUser = response[0];
            }
          }
        },
        (error) => {
          console.error('error caught in component') //ошибка на сервере
        }
      );
  }

  public moveToPage(pageUrl: string): void {
    this.activePage = pageUrl;
  }

}
