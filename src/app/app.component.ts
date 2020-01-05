import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../modules/global/services';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.isUserAuthenticated$ = this.authService.isAuthenticated$.pipe(
      tap(state => {
          if (!state) {
            this.router.navigate(['authentication', 'login']);
          } else {
            this.router.navigate(['dashboard']);
          }
        }
      ));
  }

  logout() {
    this.authService.logout();
  }
}
