class apierror extends Error{
    constructor(
        statusCode,
        message="somethhing when wrong",
        errors=[],
        statck=""

    ){//overriding
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(statck){
            this.stack=statck

        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }


}

export {apierror};