System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/contacts.services', './edit_contact.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, contacts_services_1, edit_contact_component_1;
    var Contacts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contacts_services_1_1) {
                contacts_services_1 = contacts_services_1_1;
            },
            function (edit_contact_component_1_1) {
                edit_contact_component_1 = edit_contact_component_1_1;
            }],
        execute: function() {
            exports_1("ContactEdit", edit_contact_component_1.ContactEdit);
            Contacts = (function () {
                function Contacts(_contactService) {
                    this._contactService = _contactService;
                    this.jwt = localStorage.getItem('jwt');
                }
                ;
                Contacts.prototype.ngOnInit = function () {
                    this.getUsers(this.jwt);
                };
                ;
                Contacts.prototype.getUsers = function (jwt) {
                    var _this = this;
                    this._contactService.getContacts(jwt).subscribe(function (contacts) { return _this.contacts_list = contacts; });
                };
                ;
                Contacts = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        providers: [contacts_services_1.ContactService],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        template: "\n    <!--<div class=\"data-btn\">\n       <a [routerLink] = \"['/UserAdd']\"><button> Add </button></a>\n    </div>-->\n    <br>\n    <br>\n      <div class =\"data-table\">\n        <table>\n            <tr>\n                <th style=\"width:35%\">First Name</th>\n                <th style=\"width:35%\">Last Name</th>\n                <th style=\"width:15%\">Active</th>\n                <th style=\"width:120px\">Action</th>\n            </tr>\n            <tr *ngFor=\"#contact of contacts_list\">\n                <td>{{contact.FIRST_NAME}}</td>\n                <td>{{contact.LAST_NAME}}</td>\n                <!--<td *ngIf=\"user.ACTIVE_FLAG === 'Y'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly checked> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly> Inactive<br>\n                </td>\n                <td *ngIf=\"user.ACTIVE_FLAG === 'N'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly checked>Inactive<br>\n                </td>-->\n                <td>\n                </td>\n                <td>\n                    <a class =\"a-inside edit\" [routerLink] = \"['/ContactEdit', {id: contact.ID}]\"> Edit </a>\n                    <!-- <a class =\"a-inside delete\" [routerLink] = \"['/UserDelete', {id: contact.ID}]\"> Delete </a>-->\n                </td>\n            </tr>\n        </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [contacts_services_1.ContactService])
                ], Contacts);
                return Contacts;
            })();
            exports_1("Contacts", Contacts);
        }
    }
});
//# sourceMappingURL=contacts.component.js.map