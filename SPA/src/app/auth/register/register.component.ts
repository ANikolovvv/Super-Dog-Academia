import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { emailValidator, passwordValidator } from '../validators';
import { LocalStorage } from 'src/app/core/storage-inject';
import { IAuth } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','./responsive.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePass: []
    }, {
      validators: [passwordValidator('password', 'rePass')]
    })
  })



  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  handlerRegister(): void {
    console.log(this.form.value, 'reg')
    if (this.form.invalid) { return; }
    const email = this.form.value.email;
    const password = this.form.value.pass?.password;
    const rePass = this.form.value.pass?.rePass;
    
    this.authService.register({ email: email, password: password, rePass: rePass }).subscribe((res: any) => {
      console.log('Post created successfully!', res.accessToken)
      this.authService.createToken(res)

    });
    
    this.form.reset()
    this.router.navigate(['/courses']);

  }

}
