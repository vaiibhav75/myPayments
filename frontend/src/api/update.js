import config from "../config.js";

export async function update(token, firstName, lastName, password) {
    const updateData = {};
    if (firstName && firstName !== "") updateData.firstName = firstName;
    if (lastName && lastName !== "") updateData.lastName = lastName;
    if (password && password !== "") updateData.password = password;


    return await fetch(`${config.URL}/user/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(updateData)
        });
}
