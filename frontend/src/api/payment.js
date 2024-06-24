import config from "../config.js";

export async function payment (token, amount, receiver) {
    return await fetch(`${config.URL}/account/transfer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            amount: amount,
            to: receiver
        })
    });
}
