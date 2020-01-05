import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../../modules/global/services';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return form.submitted && control.invalid;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  errorMatcher = new LoginErrorStateMatcher();
  hidePassword = true;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private authService: AuthService) {
  }

  ngOnInit(): void {}

  login(type: 'facebook' | 'google' | 'general') {
    switch (type) {
      case 'facebook':
        this.authService.loginViaFacebook();
        break;
      case 'general':
        this.submitted = true;
        if (!this.form.valid) {
          return;
        }
        this.authService.loginByEmailAndPassword(this.form.get('email').value, this.form.get('password').value);
        break;
      case 'google':
        this.authService.loginViaGoogle();
        break;
    }
  }

  get f() {
    return this.form.controls;
  }

  @HostListener('window:keyup.enter')
  onKeyEnter() {
    this.login('general');
  }

}
