import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SignupModels} from "../../../models/signup.models";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {UserModel, UserEnum} from "../../models/user.model";
import {AuthorizationService} from "../../service/getUserData.service";
import {catchError, map} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";

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

  public user: UserModel;
  public signUpForm: FormGroup;
  public userEnum = UserEnum;

  constructor(
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    // this.signUpForm = this.formBuilder.group({
    //   'name': [this.user.name, [
    //     Validators.required
    //   ]],
    //   'email': [this.user.email, [
    //     Validators.required
    //   ]],
    //   'password': [this.user.password, [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(30)
    //   ]]
    // })

    this.signUpForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  public backToLogin(): void {
    this.showSignUp = false;
    this.showSignUpChange.emit(this.showSignUp);
  }

  public registration(): void {
    let test: UserModel = {
      "id": 4,
      "first_name":" Annsssafafvswewsvsv ",
      "last_name":" Smithsgasgavr W EWA F " ,
      "email": "segsgsefsefwfeann@codingthesmartsfgsgfsgsgway.com",
      "password": "afsqwrfac12312"
    };

    this.authorizationService.userRegistration(test)
      .pipe(map((user: HttpResponse<any>) => {//same type as above statement
      }));
  }

}
