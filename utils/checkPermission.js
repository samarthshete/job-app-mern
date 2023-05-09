import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {

  // console.log(requestUser); // string
  // console.log(resourceUserId);  // Object
   
  if (requestUser.userId === resourceUserId.toString()) return
  
  throw new UnauthenticatedError('Not authorized to access this route')
};

export default checkPermissions;