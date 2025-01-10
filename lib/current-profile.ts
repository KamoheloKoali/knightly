
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const currentProfile = async () => {
    const user = await currentUser();
    const userId = user?.id

    if(!userId){
        return null   
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    })

    return profile;
}