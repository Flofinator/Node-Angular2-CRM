System.register(['rxjs/Observable', 'rxjs/add/operator/share'], function(exports_1) {
    var Observable_1;
    var LocalStorage;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            LocalStorage = (function () {
                function LocalStorage() {
                    var _this = this;
                    this._localStorage = new Array();
                    this._loggedIn = new Array();
                    this.loggedIn$ = new Observable_1.Observable(function (observer) {
                        _this._loggedinObserver = observer;
                    }).share();
                    this.localStorage$ = new Observable_1.Observable(function (observer) {
                        _this._localStorageObserver = observer;
                    }).share();
                }
                LocalStorage.prototype.add = function (value) {
                    this._localStorage.push(value);
                    this._localStorageObserver.next(this._localStorage);
                };
                LocalStorage.prototype.logIn = function (value) {
                    this._loggedIn.unshift(value);
                    this._loggedinObserver.next(this._loggedIn);
                };
                LocalStorage.prototype.logout = function (value) {
                    this._loggedIn.unshift(value);
                    this._loggedinObserver.next(this._loggedIn);
                };
                LocalStorage.prototype.load = function () {
                    this._localStorageObserver.next(this._localStorage);
                    this._loggedinObserver.next(this._loggedIn);
                };
                return LocalStorage;
            })();
            exports_1("LocalStorage", LocalStorage);
        }
    }
});
//# sourceMappingURL=LocalStorage.js.map