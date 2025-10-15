// === fetch API with async/await ===

export const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json()
        return data;
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
};