// Require Imports
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';


// Extend the Request interface to include validBody property
declare global {
    namespace Express {
        interface Request {
            validBody?: any;
        }
    }
}

// Validation
const validation = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            // Modify the error message to remove double quotes
            const errorMessage = error.message.replace(/"/g, '');
            return res.status(403).json({
                success: false,
                error: errorMessage
            });
        }
        req.validBody = value;
        next();
    };
};

// Validation Export
export default validation;
