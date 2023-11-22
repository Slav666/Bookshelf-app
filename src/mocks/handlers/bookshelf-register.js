import { rest } from "msw";
import { registerNewUser } from "../fixtures/bookshelf-login";
const URL_PATH = "/api/register/";
const registerNewUserHandler = rest.post(URL_PATH, (req, res, ctx) => {
    // Use type assertion to specify the expected type
    const newUser = req.body;
    // Check if newUser is of the expected type
    if (!newUser) {
        return res(ctx.status(400), ctx.json({ error: "Invalid user data" }));
    }
    // Assuming registerNewUser returns the registered user, adjust accordingly
    // Make sure the User type has id as a number
    const registeredUser = registerNewUser(newUser);
    return res(ctx.status(200), ctx.json({ message: "You are now registered", user: registeredUser }));
});
const registerHandlers = [registerNewUserHandler];
export { registerHandlers };
