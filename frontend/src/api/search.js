import config from "../config.js"

export async function search (query) {
    const users = await fetch(`${config.URL}/user/bulk?filter=${query}`);
    const data = await users.json();
    return data.users;
}
