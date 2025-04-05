'use client'
import { setAdminPassword } from "../actions/admin";
import { useState } from "react";

export default function setPassword() {
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null); // Reset error state

        const formData = new FormData(event.currentTarget);
        const password = formData.get("password") as string;

        try {
            await setAdminPassword( password );
            alert("Password set successfully!");
        } catch (err) {
            setError("Failed to set password. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen mx-auto">
            <h1 className="text-2xl font-bold mb-4">Set Password</h1>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Set Password
                </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}