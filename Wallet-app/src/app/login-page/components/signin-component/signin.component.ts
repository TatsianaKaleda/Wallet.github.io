import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {UserModel, UserEnum} from "../../models/user.model";
import {AuthorizationService} from "../../service/getUserData.service";
import {CookieService} from "ngx-cookie-service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {

  @Input()
  public showSignUp: boolean;
  public hide = true;

  @Output()
  showSignUpChange = new EventEmitter();

  public signInForm: FormGroup;
  public user: UserModel;
  public userEnum = UserEnum;
  public homePageUrl: string = '/home';

  private wnd: any = (<any>window);

  constructor(
    private authorizationService: AuthorizationService,
    private cookieService: CookieService,
    private _snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  public openSignUpWindow(): void {
    this.showSignUp = true;
    this.showSignUpChange.emit(this.showSignUp);
  }

  public minutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
  }

  public getUser(): void {
    let expiration = this.minutes(new Date(), 30000);
    this.authorizationService.getUserData(this.signInForm.controls.email.value, this.signInForm.controls.password.value)
      .subscribe(
        (response) => {
          this.user = response;
          if (response) {
            if (response.length != 0) {
              this.cookieService.set("email", response[0].email, expiration);
              this.moveToHomePage();
            } else {
              this.openSnackBar();
            }
          }
        },
        (error) => {
          console.error('error caught in component') //ошибка на сервере
        }
      );
  }

  public openSnackBar() {
    this._snackBar.open("Please enter valid email and password", "close", {
      panelClass: "sign-in-error"
    });
  }

  public moveToHomePage(): void {
    const searchParams = new URLSearchParams();
    this.router.navigateByUrl(this.homePageUrl).then(r => console.log("navigate to home page"));
  }
}
