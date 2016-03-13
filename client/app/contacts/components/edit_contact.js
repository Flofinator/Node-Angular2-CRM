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
                    this.params = params.get('id');
                    this.jwt = localStorage.getItem('jwt');
                }
                ContactEdit.prototype.ngOnInit = function () {
                    this.getEditContact(this.jwt, this.params);
                };
                ;
                ContactEdit.prototype.submitRoleEditForm = function () {
                    this._contactService.saveEditContact(this.jwt, this.params).subscribe();
                    this.router.navigate(['RolesList']);
                };
                ContactEdit.prototype.getEditContact = function (jwt, id) {
                    var _this = this;
                    this._contactService.getEditContact(jwt, id).subscribe(function (role_edit) {
                        _this.role = role_edit.data[0],
                            _this.role_submit.ROLE_NAME = role_edit.data[0].ROLE_NAME,
                            _this.role_submit.DESCRIPTION = role_edit.data[0].DESCRIPTION,
                            _this.role_submit.ACTIVE_FLAG = role_edit.data[0].ACTIVE_FLAG,
                            _this.modules = role_edit.modules,
                            _this.new_modules = role_edit.new_modules;
                    }, function (error) {
                        console.log('error logged:');
                        console.log(error);
                    });
                };
                ;
                ContactEdit = __decorate([
                    core_1.Component({
                        selector: 'role_modules',
                        inputs: ['module'],
                        template: "\n<div class=\"page-data\">\n\ndiv.page-data\n    form(method=\"post\" action=\"/contacts/edit/\" + data[0].ID + \"\" name=\"\" + data[0].ID + \"\")\n\n        table(cellpadding=\"11\")\n        tr\n            br\n            br\n            div(class=\"label\") First Name\n                input(type=\"text\" name=\"first_name\" value='#{data[0].FIRST_NAME}')\n\n            br\n            br\n            div(class=\"label\") Last Name\n                input(type=\"text\" name=\"last_name\" value='#{data[0].LAST_NAME}')\n\n            br\n            br\n            div(class=\"label\") Middle Name\n                input(type=\"text\" name=\"middle_name\" value='#{data[0].MIDDLE_NAME}')\n\n            br\n            br\n            div(class=\"label\") Address Line1\n                input(type=\"text\" name=\"address_line1\" value='#{data[0].LINE1}')\n\n            br\n            br\n            div(class=\"label\") Address Line2\n                input(type=\"text\" name=\"address_line2\" value='#{data[0].LINE2}')\n\n            br\n            br\n            div(class=\"label\") City\n                input(type=\"text\" name=\"city\" value='#{data[0].CITY}')\n\n            br\n            br\n            div(class=\"label\") STATE or Province\n                input(type=\"text\" name=\"state_or_province\" value='#{data[0].STATE_OR_PROVINCE}')\n\n            br\n            br\n            div(class=\"label\") Country\n                input(type=\"text\" name=\"country\" value='#{data[0].COUNTRY}')\n\n            br\n            br\n            div(class=\"label\") Postal Code\n                input(type=\"text\" name=\"postal_code\" value='#{data[0].POSTAL_CODE}')\n\n            input(type=\"hidden\" name=\"address_id\" value='#{data[0].ADDRESS_ID}')\n\n        input(type=\"submit\" name=\"submit\" value=\"Save\")\n        input(type=\"button\" name=\"cancel\" value=\"Cancel\" class=\"cancel\" onClick=\"cancelAddContact()\")"
                    }), 
                    __metadata('design:paramtypes', [contacts_services_1.ContactService, router_1.RouteParams, router_1.Router])
                ], ContactEdit);
                return ContactEdit;
            })();
        }
    }
});
//# sourceMappingURL=edit_contact.js.map