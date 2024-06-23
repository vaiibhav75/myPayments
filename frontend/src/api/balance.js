import config from "../config.js"

export async function checkBalance(token) {
    const response = await fetch(`${config.URL}/account/balance`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data.balance;
}

