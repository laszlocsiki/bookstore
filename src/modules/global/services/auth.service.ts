import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, NEVER, Observable, ReplaySubject} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {AuthProviders} from './auth.providers';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  userId$ = new BehaviorSubject<string>(null);

  constructor(private fireAuth: AngularFireAuth) {
  }

  loginViaFacebook() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth
        .signInWithPopup(this.getProviderWithScopes(AuthProviders.FACEBOOK))
        .then(res => {
          this.userId$.next(res.user.uid);
          this.isAuthenticated$.next(true);
          resolve(res);
        })
        .catch(error => {
          this.isAuthenticated$.next(false);
          console.log('User did not sign up correctly');
          console.log(error.code, error.message);
        });
    });

  }

  loginViaGoogle() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth
        .signInWithPopup(this.getProviderWithScopes(AuthProviders.GOOGLE))
        .then(res => {
          this.userId$.next(res.user.uid);
          this.isAuthenticated$.next(true);
          resolve(res);
        })
        .catch(error => {
          this.isAuthenticated$.next(false);
          console.log('User did not sign up correctly');
          console.log(error.code, error.message);
        });
    });
  }

  loginByEmailAndPassword(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          this.userId$.next(res.user.uid);
          this.isAuthenticated$.next(true);
          resolve(res);
        })
        .catch(error => {
          this.isAuthenticated$.next(false);
          console.log('User did not sign up correctly');
          console.log(error.code, error.message);
        });
    });

  }

  getProviderWithScopes(provider) {
    provider.addScope('profile');
    provider.addScope('email');
    return provider;
  }

  createAccount(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        this.isAuthenticated$.next(true);
        console.log(res);
        resolve(res);
      }).catch(error => {
          this.isAuthenticated$.next(false);
          console.log('User did not sign up correctly');
          console.log(error.code, error.message);
        });
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signOut().then(res => {
        this.isAuthenticated$.next(false);
        resolve(res);
      }).catch(error => {
        this.isAuthenticated$.next(false);
        console.log('User did not sign out correctly');
        console.log(error.code, error.message);
      });
    });
  }
}
