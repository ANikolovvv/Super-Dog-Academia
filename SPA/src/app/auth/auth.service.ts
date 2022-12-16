
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, Subscription, tap, throwError, timeInterval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../core/storage-inject';
import { IAuth } from '../interfaces/auth';
import { IOrder } from '../interfaces/course';
import { IUser } from '../interfaces/user';
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
  );
  auth: IAuth | undefined;
  user: IUser | null = null;
  error: any;
  token: any;
  guest: any;

  get isUser() {
    return this.user !== null;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  subscription: Subscription;
  constructor(@Inject(LocalStorage) private localeStorage: Window['localStorage'], private https: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });

    try {
      const local = this.localeStorage.getItem('<USER>') || 'Error';
      this.user = JSON.parse(local)

    } catch (error) {
      this.user = null;

    }
  }

  login(email: string, password: string, rePass: string): Observable<IUser> {
    this.user = {
      email,
      password,
      rePass

    }
   
    return this.https.post<IUser>(`${url}/auth/login`, JSON.stringify({ email, password, rePass }), this.httpOptions)
      .pipe(tap(user => this.user$$.next(user)));
  }
  createToken(token: any) {
    this.auth = token;
    this.token = token.accessToken
    this.localeStorage.setItem('<USER>', JSON.stringify(token))
    console.log('token')
    return token;
  }

  register(ctx: any): Observable<IUser> {
    this.user = ctx;
    return this.https.post<IUser>(`${url}/auth/register`, JSON.stringify(ctx), this.httpOptions)
      .pipe(tap(user => this.user$$.next(user))
      )

  }

  logout() {
    const httpTokenOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-Authorization": this.token
      })

    }
    this.user = null
    this.localeStorage.clear();
    return this.https.get<IUser>(`${url}/auth/logout`, httpTokenOptions)

  }

  getMyCourse(): Observable<any> {
    this.guest = this.localeStorage.getItem('<USER>')
    const ctx = this.guest;
    const id = JSON.parse(ctx)._id;
    return this.https.get<any>(`${url}/trainer/my-data/${id}`)
  }
  deleteMyCourse(id: any): Observable<IOrder> {

    this.guest = this.localeStorage.getItem('<USER>')
    const ctx = this.guest;
    const accessToken = JSON.parse(ctx).accessToken;
    console.log(accessToken, 'acc')
    const httpTokenOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-Authorization": accessToken
      })

    }
    return this.https.delete<IOrder>(`${url}/trainer/my-data/${id}`, httpTokenOptions);
  }
  createMyCourse(ctx: any): Observable<IOrder> {
    this.guest = this.localeStorage.getItem('<USER>')
    const info = this.guest;
    const token = JSON.parse(info).accessToken;

    const httpTokenOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-Authorization": token
      })

    }
    return this.https.post<IOrder>(`${url}/trainer/my-data`, JSON.stringify(ctx), httpTokenOptions)

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
