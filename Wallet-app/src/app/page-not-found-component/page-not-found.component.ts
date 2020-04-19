import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  @Output()

  public homePageUrl: string = '/home';

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  public moveToHomePage(): void {
    const searchParams = new URLSearchParams();
    this.router.navigateByUrl(this.homePageUrl).then(r => console.log("navigate to home page"));
  }
}
