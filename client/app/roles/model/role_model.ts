

export class Edit_Role{
    ID: string;
    ROLE_NAME: string;
    DESCRIPTION: string;
    ACTIVE_FLAG: string;
    constructor(obj?: any){
        this.ID         = obj && obj.ID;
        this.ROLE_NAME  = obj && obj.ROLE_NAME;
        this.DESCRIPTION  = obj && obj.DESCRIPTION;
        this.ACTIVE_FLAG  = obj && obj.ACTIVE_FLAG;
    }

}

export class Edit_Role_Module{
    ROLE_ID: string;
    MODULE_NAME: string;
    INSERT_ALLOWED_FLAG: string;
    UPDATE_ALLOWED_FLAG: string;
    DELETE_ALLOWED_FLAG: string;
    QUERY_ONLY: string;
    constructor(obj?: any){
        this.ROLE_ID              = obj && obj.ROLE_ID;
        this.MODULE_NAME          = obj && obj.MODULE_NAME;
        this.INSERT_ALLOWED_FLAG  = obj && obj.INSERT_ALLOWED_FLAG;
        this.UPDATE_ALLOWED_FLAG  = obj && obj.UPDATE_ALLOWED_FLAG;
        this.DELETE_ALLOWED_FLAG  = obj && obj.DELETE_ALLOWED_FLAG;
        this.QUERY_ONLY           = obj && obj.QUERY_ONLY;

    }

}

export class Edit_Role_NewModule{
    MODULE_NAME: string;
    constructor(obj?: any){
        this.MODULE_NAME  = obj && obj.MODULE_NAME;
    }

}