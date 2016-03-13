System.register(['angular2/platform/browser', './app.components', 'angular2/router', 'angular2/http', 'angular2/core', "./utility/localstorage/LocalStorage"], function(exports_1) {
    var browser_1, app_components_1, router_1, http_1, core_1, LocalStorage_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_components_1_1) {
                app_components_1 = app_components_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_components_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                LocalStorage_1.LocalStorage,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map