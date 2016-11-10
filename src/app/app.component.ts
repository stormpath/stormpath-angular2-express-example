import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Stormpath } from 'angular-stormpath';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <div *ngIf="(user$ | async)" class="row text-center">
       <h2 class="">
         Welcome, ({{ ( user$ | async ).fullName }}).
       </h2>
       <hr/>
       <h4>What would you like to do?</h4>

       <ul class="nav nav-pills nav-stacked text-centered">
         <li role="presentation" (click)="logout()"><a href="#">Logout</a></li>
       </ul>
     </div>

     <sp-authport></sp-authport>`,
  providers: [Stormpath]
})
export class AppComponent {
  title = 'app works!';
  private user$: Observable<Account | boolean>;
  private loggedIn$: Observable<boolean>;
  private login: boolean;
  private register: boolean;

  constructor(public stormpath: Stormpath) {
  }

  ngOnInit() {
    this.login = true;
    this.register = false;
    this.user$ = this.stormpath.user$;
    this.loggedIn$ = this.user$.map(user => !!user);
  }

  showLogin() {
    this.login = !(this.register = false);
  }

  showRegister() {
    this.register = !(this.login = false);
  }

  logout() {
    this.stormpath.logout();
  }
}
