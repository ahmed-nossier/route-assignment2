import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(/^[A-Z]/),
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
  });
  flag: boolean = false;
  success: boolean = false;

  constructor(public _AuthService: AuthService, public _Router: Router) {}
  getRegisterinfo(registerForm) {
    if (registerForm.valid == true) {
      this._AuthService.register(registerForm.value).subscribe((data) => {
        if (data.message == 'success') {
          this.success = !this.success;
          //this._Router.navigate(['/login']);
        } else {
          this.flag = !this.flag;
        }
      });
    }
  }

  ngOnInit(): void {}
}
