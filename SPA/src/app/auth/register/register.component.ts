import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { emailValidator, passwordValidator } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required,emailValidator(['bg','com'])]],
    pass:this.fb.group({
      password:['', [Validators.required, Validators.minLength(4)]],
      rePass:[]
    },{
      validators:[passwordValidator('password','rePass')]
    })
  })
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register(): void {
     console.log(this.form.value)
    // if (form.invalid) { return; }
    // const value: { email: string; password: string; repass: string } = form.value;
    // this.authService.register(value.email, value.password);
    // form.setValue({ email: '', password: '', repass: '' });
    // this.router.navigate(['/courses']);
    // console.log(value);

  }
}
