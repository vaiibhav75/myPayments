import config from "../config.js";

export async function signup (firstName, lastName, username, password) {
    return await fetch(`${config.URL}/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({firstName, lastName, username, password})
    });
}





