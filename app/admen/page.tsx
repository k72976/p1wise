import Link from "next/link";

export default function AdminPage(){
    return (
        <div className="">
      <h1 className="text-2xl font-bold mb-4 p-4 bg-red-400 text-white">
        Admin Page - Noones Account
      </h1>
      <div className="flex justify-center gap-8 mb-4">
        {/* <Link href="/ad3min/noones" className="underline text-blue-600">
          Noones
        </Link>
        <Link href="/ad3min" className="underline text-blue-600">
          Paxful
        </Link> */}
      </div>
      <h2 className="fonts-bold  px-4">Noones Accounts</h2>
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
          
        </table>
      </div>
    </div>
    )
}