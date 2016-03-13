import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

export class LocalStorage {
  public localStorage$: Observable<Array<string>>;
  private _localStorageObserver: any;
  private _localStorage: Array<string>;

  public loggedIn$ :Observable<boolean>;
  private _loggedinObserver: any;
  private _loggedIn: Array<string>;

  constructor() {
    this._localStorage = new Array<string>;

    this._loggedIn = new Array<string>;

    this.loggedIn$ = new Observable(observer => {
      this._loggedinObserver = observer;
    }).share();

    this.localStorage$ = new Observable(observer => {
      this._localStorageObserver = observer;
    }).share();
  }

  add(value: string) {
    this._localStorage.push(value);
    this._localStorageObserver.next(this._localStorage);
  }

  logIn(value: string){
    this._loggedIn.unshift(value);
    this._loggedinObserver.next(this._loggedIn);
  }

  logout(value: string){
    this._loggedIn.unshift(value);
    this._loggedinObserver.next(this._loggedIn);
  }

  load() {
    this._localStorageObserver.next(this._localStorage);
    this._loggedinObserver.next(this._loggedIn);
  }
}