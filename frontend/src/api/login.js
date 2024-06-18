import config from "../config.js"

export async function login (username, password) {
    return await fetch(`${config.URL}/user/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
    });
}

