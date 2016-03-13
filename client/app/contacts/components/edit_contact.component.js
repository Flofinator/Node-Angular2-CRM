System.register(['angular2/core', '../services/contacts.services', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contacts_services_1, router_1;
    var ContactEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contacts_services_1_1) {
                contacts_services_1 = contacts_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactEdit = (function () {
                function ContactEdit(_contactService, params, router) {
                    this._contactService = _contactService;
                    this.router = router;
                    this.contact_submit = {};
                    this.address_submit = {};
                    this.params = params.get('id');
                    this.jwt = localStorage.getItem('jwt');
                }
                ContactEdit.prototype.ngOnInit = function () {
                    this.getEditContact(this.jwt, this.params);
                    console.log(this.contact);
                };
                ;
                ContactEdit.prototype.submitContactEditForm = function () {
                    //this._contactService.saveEditContact(this.jwt, this.params).subscribe();
                    //this.router.navigate(['ContactsList']);
                    console.log(this.contact_submit);
                    console.log(this.address_submit);
                };
                ContactEdit.prototype.getEditContact = function (jwt, id) {
                    var _this = this;
                    this._contactService.getEditContact(jwt, id).subscribe(function (contact_edit) {
                        _this.contact = contact_edit.data[0],
                            _this.contact_submit.FIRST_NAME = contact_edit.data[0].FIRST_NAME,
                            _this.contact_submit.LAST_NAME = contact_edit.data[0].LAST_NAME,
                            _this.contact_submit.MIDDLE_NAME = contact_edit.data[0].MIDDLE_NAME,
                            _this.contact_submit.DATE_OF_BIRTH = contact_edit.data[0].DATE_OF_BIRTH,
                            _this.address_submit.LINE1 = contact_edit.data[0].LINE1,
                            _this.address_submit.LINE2 = contact_edit.data[0].LINE2,
                            _this.address_submit.CITY = contact_edit.data[0].CITY,
                            _this.address_submit.COUNTY = contact_edit.data[0].COUNTY,
                            _this.address_submit.STATE_OR_PROVINCE = contact_edit.data[0].STATE_OR_PROVINCE,
                            _this.address_submit.COUNTRY = contact_edit.data[0].COUNTRY,
                            _this.address_submit.POSTAL_CODE = contact_edit.data[0].POSTAL_CODE;
                    }, function (error) {
                        console.log('error logged:');
                        console.log(error);
                    });
                };
                ;
                ContactEdit = __decorate([
                    core_1.Component({
                        selector: 'edit_contact',
                        template: "\n<div class=\"page-data\">\n    <form #f=\"ngForm\" (ngSubmit)=\"submitContactEditForm()\">\n\n\t\t<table cellpadding=\"11\">\n            <tr>\n                <div class=\"label\"> First Name </div>\n                    <input type=\"text\" [value]=\"contact?.FIRST_NAME\" [(ngModel)]=\"contact_submit.FIRST_NAME\">\n                <br>\n                <br>\n                <div class=\"label\"> Last Name</div>\n                    <input type=\"text\" [value]=\"contact?.LAST_NAME\" [(ngModel)]=\"contact_submit.LAST_NAME\">\n\n                <br>\n                <br>\n\n                <div class=\"label\"> Middle Name </div>\n                    <input type=\"text\" [value]=\"contact?.MIDDLE_NAME\" [(ngModel)]=\"contact_submit.MIDDLE_NAME\">\n                <br>\n                <br>\n                <div class=\"label\"> Date of Birth</div>\n                    <input type=\"text\" [value]=\"contact?.DATE_OF_BIRTH\" [(ngModel)]=\"contact_submit.DATE_OF_BIRTH\">\n                <br>\n                <br>\n                <div class=\"label\"> Address Line 1</div>\n                    <input type=\"text\" [value]=\"contact?.LINE1\" [(ngModel)]=\"address_submit.LINE1\">\n\n                <br>\n                <br>\n                <div class=\"label\"> Address Line 2 </div>\n                    <input type=\"text\" [value]=\"contact?.LINE2\" [(ngModel)]=\"address_submit.LINE2\">\n                <br>\n                <br>\n                <div class=\"label\"> City</div>\n                    <input type=\"text\" [value]=\"contact?.CITY\" [(ngModel)]=\"address_submit.CITY\">\n\n                <br>\n                <br>\n                <div class=\"label\"> County</div>\n                    <input type=\"text\" [value]=\"contact?.COUNTY\" [(ngModel)]=\"address_submit.COUNTY\">\n\n                <br>\n                <br>\n\n                <div class=\"label\"> State or Province </div>\n                    <input type=\"text\" [value]=\"contact?.STATE_OR_PROVINCE\" [(ngModel)]=\"address_submit.STATE_OR_PROVINCE\">\n                <br>\n                <br>\n                <div class=\"label\"> Country</div>\n                    <input type=\"text\" [value]=\"contact?.COUNTRY\" [(ngModel)]=\"address_submit.COUNTRY\">\n\n                <br>\n                <br>\n                <div class=\"label\"> Postal Code</div>\n                    <input type=\"text\" [value]=\"contact?.POSTAL_CODE\" [(ngModel)]=\"address_submit.POSTAL_CODE\">\n\n                <br>\n                <br>\n            </tr>\n\t\t</table>\n\t\t<input type=\"submit\" name=\"submit\" value=\"Save\">\n\t</form>\t"
                    }), 
                    __metadata('design:paramtypes', [contacts_services_1.ContactService, router_1.RouteParams, router_1.Router])
                ], ContactEdit);
                return ContactEdit;
            })();
            exports_1("ContactEdit", ContactEdit);
        }
    }
});
//# sourceMappingURL=edit_contact.component.js.map