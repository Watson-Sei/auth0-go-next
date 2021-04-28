import { getSession } from "@auth0/nextjs-auth0";
import auth0 from "../../lib/auth0";

export default auth0.requireAuthentication(async (req, res) => {
    const { accessToken } = await auth0.getSession(req)
    await fetch('http://localhost:8080/private', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }).then((response) => {
        return response.json();
    }).then((result) => {
        res.status(200).json(result.text);
    }).catch((error) => {
        res.status(error.status || 400).end(error.message);
    })
});