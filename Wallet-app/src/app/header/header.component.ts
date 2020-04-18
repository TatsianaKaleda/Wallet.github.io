import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnum} from "../constants/navigation.enum";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public userName: string;
  @Input()
  public activePage: string;
  @Input()
  public hideControls: boolean;

  @Output()
  public activePageChange: EventEmitter<any> = new EventEmitter<any>();

  public navigationEnum = NavigationEnum;

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  public moveToPage(): void {
    this.activePage = this.navigationEnum.profile;
    this.activePageChange.emit(this.activePage);
  }

  public logout(): void {
    if(this.cookieService.get('email')){
      this.cookieService.delete('email');
      document.location.reload(true);
    }
  }

}
