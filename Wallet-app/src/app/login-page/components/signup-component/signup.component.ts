import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from "@angular/forms";
import {UserModel, UserEnum} from "../../models/user.model";
import {AuthorizationService} from "../../service/getUserData.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie-service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: {
    "[class.app-sign-up]": "true"
  }
})

export class SignUpComponent implements OnInit {

  @Input()
  public showSignUp: boolean;

  @Output()
  showSignUpChange = new EventEmitter();

  public signUpForm: FormGroup;
  public userEnum = UserEnum;
  public homePageUrl: string = '/home';

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private cookieService: CookieService,
              private _snackBar: MatSnackBar,
              private authorizationService: AuthorizationService) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true}
  }

  ngOnInit(): void {
  }

  public backToLogin(): void {
    this.showSignUp = false;
    this.showSignUpChange.emit(this.showSignUp);
  }

  public minutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
  }

  public registration(): void {
    let newCustomer: UserModel = {
      "password": this.signUpForm.controls[this.userEnum.password].value,
      "first_name": this.signUpForm.controls[this.userEnum.firstName].value,
      "last_name": this.signUpForm.controls[this.userEnum.lastName].value,
      "email": this.signUpForm.controls[this.userEnum.email].value
    };

    if (this.signUpForm.valid) {
      let expiration = this.minutes(new Date(), 30);
      this.authorizationService.getUserData(newCustomer.email, newCustomer.password)
        .subscribe(
          (response) => {
            if (response) {
              if (response.length != 0) {
                this.openSnackBar();
              } else {
                this.authorizationService.userRegistration(newCustomer);
                this.cookieService.set("email", newCustomer.email, expiration);
                this.moveToHomePage();
              }
            }
          },
          (error) => {
            console.error('error caught in component') //ошибка на сервере
          }
        );
    }
  }

  public openSnackBar() {
    this._snackBar.open("This user already exists", "close", {
      panelClass: "sign-in-error"
    });
  }

  public moveToHomePage(): void {
    const searchParams = new URLSearchParams();
    this.router.navigate([this.homePageUrl]).then(r => console.log("navigate to home page"));
  }

}
