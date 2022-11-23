import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  register(form:NgForm):void{
    if (form.invalid) { return; }
    const value: { email: string; password: string; repass:string } = form.value;
    this.authService.register(value.email,value. password);
    form.setValue({ email: '', password: '' ,repass:''});
    this.router.navigate(['/courses']);
    console.log(value);
   
}
}
