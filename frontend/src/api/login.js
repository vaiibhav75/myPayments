import config from "../../config.js";

async function login (username, password) {
    const response = await fetch(`${config.URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({username, password})
    })
    return await response.json();
}

export default {login}