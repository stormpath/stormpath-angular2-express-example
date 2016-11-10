/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StormpathModule, Stormpath } from 'angular-stormpath';
import { BaseRequestOptions, Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [StormpathModule],
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        {provide: Stormpath, useClass: Stormpath},
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
