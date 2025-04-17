'use client';
import Link from "next/link";
import { useState } from "react";

export default function LoginForm({ action }:{action:(formData:FormData)=>Promise<void>}) {
  const [isEmailActive, setEmailActive] = useState(true);

  return (
    <form
    className="flex flex-col justify-between min-h-[50vh]"
    action={action}
  >
    <div className="space-y-8">
      <div className="relative flex justify-center items-center">
        <img
          src={
            isEmailActive
              ? "/noones_input_black.png"
              : "/noones_input.png"
          }
          alt="Input Background"
        />
        <input
          placeholder="Your Email/ Phone Number"
          name="email"
          required
          className="absolute top-1/3 outline-none bg-transparent"
          onFocus={() => setEmailActive(true)}
          onBlur={() => setEmailActive(false)}
        />
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src={
            !isEmailActive
              ? "/noones_input_black.png"
              : "/noones_input.png"
          }
          alt="Input Background"
        />
        <input
          placeholder="Your Password"
          type="password"
          name="password"
          required
          className="absolute top-1/3 outline-none bg-transparent"
          onFocus={() => setEmailActive(false)}
          onBlur={() => setEmailActive(true)}
        />
      </div>
    </div>
    <div>
      <div className="flex flex-col max-w-lg mx-auto text-center space-y-8">
        <Link href="/" className="text-[#07b979] font-bold">
          Forgot Password
        </Link>
        <button type='submit' className="mx-8 bg-[#07b979] py-3 rounded-full text-white font-semibold hover:bg-green-600">
          Continue
        </button>
      </div>
    </div>
  </form>
  );
}
