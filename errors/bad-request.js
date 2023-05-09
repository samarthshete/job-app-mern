import { StatusCodes } from "http-status-codes"; 
import CustomeApiError from "./custom-api.js";

class BadRequestError extends CustomeApiError {

    constructor (message){
        super(message) 
        this.StatusCode = StatusCodes.BAD_REQUEST 
    }
}

export default BadRequestError