'use client'

import { deleteNooneUser } from "../actions/noones"

export default function DeleteUserBtn({ userId }: { userId: string }) {
return(   
        <button className="text-red-600 hover:cursor-pointer hover:text-red-800" onClick={()=>deleteNooneUser(userId)}>Delete</button>
)
}