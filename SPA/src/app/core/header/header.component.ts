import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageAlt = 'super-dog';
  get isLogged(): boolean {
    return this.auhtService.isUser;
  }
  
  //isUser:boolean=this.auhtService.isUser;
  //guest = !this.isLogged;
 // user = this.isLogged;
  constructor(private auhtService: AuthService, private route: Router) {
 
  }
  ngOnInit(): void {
    
  }
  logout() {
    //this.guest = true
    this.auhtService.logout();
    this.route.navigate(['/auth/login'])
  }

}
