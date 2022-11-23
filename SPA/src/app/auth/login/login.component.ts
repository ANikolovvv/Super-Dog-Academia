import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleLogin(form: NgForm): void {
    if (form.invalid) { return; }
    const value: { email: string; password: string } = form.value;
    this.authService.login(value.email,value. password);
    form.setValue({ email: '', password: '' });
    console.log(value);
    

    this.router.navigate(['/courses']);
  }
}
