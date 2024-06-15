import config from "../../config.js";

async function signup (firstName, lastName, username, password) {
    const response = await fetch(`${config.URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({firstName, lastName, username, password})
    })
    return await response.json();
}
export default {signup}

