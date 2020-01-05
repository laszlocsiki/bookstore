import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() isAuthenticated = false;
  @Output() logout = new EventEmitter();

  constructor(private router: Router) {
  }

  goTo(place: string) {
    switch (place) {
      case 'userDetails':
        this.router.navigate(['user']);
        break;
      case 'myStore':
        this.router.navigate(['mystore']);
        break;
      case 'home':
        this.router.navigate(['']);
        break;
    }
  }
}
