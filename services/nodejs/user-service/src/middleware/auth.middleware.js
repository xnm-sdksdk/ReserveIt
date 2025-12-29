import jwt from "jsonwebtoken";
import { PUBLIC_KEY } from "../config/jwt.js";

export function authenticate(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) return res.sendStatus(401);

    const token = auth.split(" ")[1];

    try {
        const payload = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ["RS256"],
            issuer: "user-service"
        });

        req.user = payload;
        next();
    } catch {
        return res.sendStatus(401);
    }
}