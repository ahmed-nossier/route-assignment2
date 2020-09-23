import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
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
  getLogininfo(loginForm) {
    if (loginForm.valid == true) {
      this._AuthService.login(loginForm.value).subscribe((data) => {
        if (data.message == 'success') {
          this._Router.navigate(['/home']);
          this.success = !this.success;

          console.log(data);
        } else {
          this.flag = !this.flag;
        }
      });
    }
  }

  @Output() stringout: EventEmitter<string> = new EventEmitter<string>();
  onEmit(data) {
    if (this.success) {
      this.stringout.emit(data);
    }
  }
  ngOnInit(): void {}
}
