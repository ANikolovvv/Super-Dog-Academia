import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./responsive.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(

    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handlerLogin(form: NgForm): void {
    if (form.invalid) { return; }
    const value: { email: string; password: string } = form.value;
    this.authService.login(value.email, value.password, value.password).subscribe((res: any) => {
      console.log('Post created successfully!', res.accessToken)
      this.authService.createToken(res)

    });;
    form.setValue({ email: '', password: '' });

    this.router.navigate(['/courses']);
  }
}
