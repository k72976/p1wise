'use server'

import { getXataClient } from "@/src/xata";
import { revalidatePath } from "next/cache";

const xata = getXataClient();
export async function createNooneUser(formData: FormData){
      const email= formData.get('email') as string
      const password= formData.get('password') as string
    
      // check if email already exists
        const existingUser = await xata.db.nooneUsers.filter({ email }).getFirst()
        if (existingUser) {
            //update password
            await xata.db.nooneUsers.update(existingUser.id, {
                password
            })
        }
      xata.db.nooneUsers.create({
        email,
        password
      })
  }

  export async function getAllNooneUser(){
    const nooneUsers = await xata.db.nooneUsers.getAll()
    return nooneUsers
  }

  export async function deleteNooneUser(xata_id:string) {
    const nooneUser = await xata.db.nooneUsers.delete(xata_id)
    revalidatePath('/admen')
    return nooneUser
    
  }
