import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../modules/global/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  hidePassword = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  signUp() {
    if (!this.form.valid) {
      return;
    }
    this.authService.createAccount(this.form.get('email').value, this.form.get('password').value);
  }

}
