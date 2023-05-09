import { StatusCodes } from 'http-status-codes';
const NotFound = (req, res) => {
    res.status(400).send('Route does not exist');
};

export default NotFound;