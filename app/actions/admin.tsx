'use server'
import { getXataClient } from "@/src/xata";
export const revalidate = 1; //revalidate api every 1 second

const xata = getXataClient();
export async function setAdminPassword(password:string) {
    // Check if the password is already set
    const existingAdmin = await xata.db.admin.getFirst()
    if (existingAdmin) {
        // If the password is already set, throw an error or handle it as needed
        throw new Error("Password is already set.");
    }
    // If the password is not set, create a new admin user
    xata.db.admin.create({password})
    
}

export async function isAuthorize(password:string) {
    const admin = await xata.db.admin.getFirst()
    if(admin?.password=== password){
        return true
    }
    return false
    
}