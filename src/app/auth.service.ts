import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(        private router: Router,
    ) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }

  login() {
    // logic
    localStorage.setItem('loggedIn', 'true');
    this.isLoggedIn$.next(true);
    this.router.navigate(['/login']);


  }

  logout() {
    // logic
    localStorage.setItem('loggedIn', 'false');
    this.isLoggedIn$.next(false);
  }
}