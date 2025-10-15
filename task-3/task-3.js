// === ES modules with import/export ===

import { fetchUsers } from "./api";

const showUsers = async () => {
    const users = await fetchUsers();
    console.log("Fetched Users:");
    console.table(users);
}

showUsers();