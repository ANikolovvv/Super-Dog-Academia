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
  get isLogged(){
    return this.auhtService.isUser;
  }
  get user() {
    return this.auhtService.user;
  }
  //isUser:boolean=this.auhtService.isUser;
  guest = localStorage.getItem('<USER>');
 
  constructor(private auhtService: AuthService, private route: Router) {
 
  }
  ngOnInit(): void {
    console.log('guest',this.guest)
  }
  logout() {
     console.log('logaut',this.auhtService.user)
    this.auhtService.logout().subscribe({
      next: () => {
        this.route.navigate(['/auth/login']);
      },
      error: () => {
        this.route.navigate(['/auth/login']);
      }
    });
    
  }

}
