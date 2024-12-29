import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request ,cookies}) => {
    const data = await request.json(); // Ensure you destructure `request` from the `RequestEvent`

    if (!data.username) {
        throw error(400, 'Username is required');
    }

    if (!data.password) {
        throw error(400, 'Password is required');
    }

    cookies.set('token','token_value',{
        httpOnly: true,   // Prevents client-side JavaScript from accessing the cookie
        secure: true,     // Ensures the cookie is sent over HTTPS
        path: '/',        // Makes the cookie available to the entire site
        maxAge: 60 * 60   // Optional: Cookie expires in 1 hour
    });
    return json({ name: data.username, id: 1 });
};
