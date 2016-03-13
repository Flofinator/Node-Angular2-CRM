System.register([], function(exports_1) {
    var Edit_Role, Edit_Role_Module, Edit_Role_NewModule;
    return {
        setters:[],
        execute: function() {
            Edit_Role = (function () {
                function Edit_Role(obj) {
                    this.ID = obj && obj.ID;
                    this.ROLE_NAME = obj && obj.ROLE_NAME;
                    this.DESCRIPTION = obj && obj.DESCRIPTION;
                    this.ACTIVE_FLAG = obj && obj.ACTIVE_FLAG;
                }
                return Edit_Role;
            })();
            exports_1("Edit_Role", Edit_Role);
            Edit_Role_Module = (function () {
                function Edit_Role_Module(obj) {
                    this.ROLE_ID = obj && obj.ROLE_ID;
                    this.MODULE_NAME = obj && obj.MODULE_NAME;
                    this.INSERT_ALLOWED_FLAG = obj && obj.INSERT_ALLOWED_FLAG;
                    this.UPDATE_ALLOWED_FLAG = obj && obj.UPDATE_ALLOWED_FLAG;
                    this.DELETE_ALLOWED_FLAG = obj && obj.DELETE_ALLOWED_FLAG;
                    this.QUERY_ONLY = obj && obj.QUERY_ONLY;
                }
                return Edit_Role_Module;
            })();
            exports_1("Edit_Role_Module", Edit_Role_Module);
            Edit_Role_NewModule = (function () {
                function Edit_Role_NewModule(obj) {
                    this.MODULE_NAME = obj && obj.MODULE_NAME;
                }
                return Edit_Role_NewModule;
            })();
            exports_1("Edit_Role_NewModule", Edit_Role_NewModule);
        }
    }
});
//# sourceMappingURL=role_model.js.map