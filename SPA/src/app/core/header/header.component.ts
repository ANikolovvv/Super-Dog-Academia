import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './responsive.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateY(100%)'}))
      ])
    ]),
    trigger('run', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100)'}))
      ])
    ]),
  ]
                             
})

export class HeaderComponent implements OnInit {
  imageAlt = 'super-dog';
  isOpen: boolean = true;
  
  get isLogged() {
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
    setInterval(() => {
      this.isOpen = !this.isOpen;
     
    }, 5000)
  }
  logout() {
    console.log('logaut', this.auhtService.user)
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
