import { StatusCodes } from "http-status-codes"; 
import CustomeApiError from "./custom-api.js";

class NotFoundError extends CustomeApiError {

    constructor (message){
        super(message) 
        this.StatusCode = StatusCodes.NOT_FOUND
    }
}

export default NotFoundError