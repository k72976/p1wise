// app/admin/page.tsx or wherever your AdminPage is located

import { getAllNooneUser } from "../actions/noones";
import DeleteUserBtn from "../components/deleteUserBtn";
import PasswordGate from "../components/passwordGate";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const users = await getAllNooneUser(); // fetch all users on server side

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 p-4 bg-red-400 text-white">
        Admin 
      </h1>

      <PasswordGate>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">All Noone Users</h2>
          <div className="overflow-x-auto">
        <table className="min-w-full text-black text-xs bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Password</th>
              <th className="py-2 px-4 border-b">action</th>
              {/* <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.password}</td>
                <td className="py-2 px-4 border-b">
                  <DeleteUserBtn userId={user.id as string} />
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
        </div>
      </PasswordGate>
    </div>
  );
}
