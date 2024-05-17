import { NextFunction, Response, Request } from 'express';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.autorization

    if(!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(".") 

    try {
        const {sub}
    } catch (err) {
        
    }
}