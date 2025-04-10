'use server'

import { getXataClient } from "@/src/xata";

const xata = getXataClient()
export const dynamic = "force-dynamic";

export async function createNooneUser(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const user = await xata.db.nooneUsers.create({
        email,
        password, // You might want to hash the password before saving
      });
      console.log('User created:', user);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
