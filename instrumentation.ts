
import dbConnect from "@/app/core/lib/dbConnect"

export async function register() {
    await dbConnect()
}

