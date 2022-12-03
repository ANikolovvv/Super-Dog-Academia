
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, Subscription, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../core/storage-inject';
import { IAuth } from '../interfaces/auth';
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
  token:any;

  get isUser() {
    return this.user !== null;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   


  subscription: Subscription;
  constructor(@Inject(LocalStorage) private localeStorage: Window['localStorage'],private https: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
    try {
      const local = this.localeStorage.getItem('<USER>') || 'Error';
      this.user = JSON.parse(local)
      console.log('is user',  local)
    } catch (error) {
      this.user = null;
      //console.log(error)
    }
  }

  login(email: string, password: string, rePass: string): Observable<IUser>  {
    this.user = {
      email,
      password,
      rePass

    }
    this.localeStorage.setItem('<USER>', JSON.stringify(this.user))
    return this.https.post<IUser>(`${url}/auth/login`,JSON.stringify({email,password,rePass}),this.httpOptions)
    .pipe(tap(user => this.user$$.next(user)));
  }
  createToken(token:any){
    return this.auth=token;
  }

  register(ctx: any): Observable<IUser> {
   
    this.user = ctx;
    
    this.localeStorage.setItem('<USER>', JSON.stringify(this.user))
    return this.https.post<IUser>(`${url}/auth/register`, JSON.stringify(ctx), this.httpOptions)
    .pipe(tap(user => this.user$$.next(user))
    )

  }
  
  logout() {
    this.token=this.auth?.accessToken;
   const httpTokenOptions=  {
      headers:new HttpHeaders({
        "Content-Type": "application/json",
        "X-Authorization": this.token
      })
      
    }
    console.log(this.auth)
    this.user=null
    this.localeStorage.clear();
    return this.https.get<IUser>(`${url}/auth/logout`,httpTokenOptions)
    
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
