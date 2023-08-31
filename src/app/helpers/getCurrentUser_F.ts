import axios from "axios"

export default async function getCurrentUser(email: string) {
    try {
        if (!email) return null

        const user = await axios.get("/api/user?email=" + email)

        if (user) return user.data

        return null
    } catch (error: any) {
        console.error(error);
        return null
    }
}