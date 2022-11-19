import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { LocalStorage } from '../core/storage-inject';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | undefined;

  get isUser(): boolean {
    return !!this.user;
  }

  constructor(@Inject(LocalStorage) private localeStorage: Window['localStorage']) {

    try {
      const local = this.localeStorage.getItem('<USER>') || 'Error';
      this.user = JSON.parse(local)
      console.log('is user', this.user, local)
    } catch (error) {
      this.user = undefined;
      console.log(error)
    }
  }

  login(email: string, password: string): void {
    this.user = {
      email,
      password

    }
    this.localeStorage.setItem('<USER>', JSON.stringify(this.user))

  }
  register(email: string, password: string): void {

    this.user = {
      email,
      password

    }
    this.localeStorage.setItem('<USER>', JSON.stringify(this.user))
    //localStorage.setItem('user', JSON.stringify(this.user))
  }
  logout(): void {
    this.localeStorage.clear();
    this.user = undefined;
  }
}
