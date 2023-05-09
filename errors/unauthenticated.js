import CustomeApiError from "./custom-api.js";
import { StatusCodes } from "http-status-codes"; 

class UnauthenticatedError  extends CustomeApiError{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED
    }

}

export default UnauthenticatedError 