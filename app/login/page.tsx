import { ChevronLeft, Info } from "lucide-react";
import Link from 'next/link'
import { useState } from "react";
import { GogleIcon } from "../components/icons/google";
import { FaceBookIcon } from "../components/icons/fb";
import { AppleIcon } from "../components/icons/apple";
export default function LoginPage(){
    const [isEmailActive, setEmailActive] = useState(true);

    async function createNooneUser(formData: FormData){
      const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password')
      }
      console.log(rawFormData);
      
    }

    return(<div>
        <div
          style={{ backgroundImage: 'url("/noones_pixel_image.svg")' }}
          className="py-4"
        >
          <div>
            <div className="flex justify-between px-4">
              <ChevronLeft />
              <div className="flex gap-4">
                <Info />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9 3h6v2H9V3ZM7 5V4h2v2H7v1H6v2H4V7h1V5h2ZM5 9v6h1v2H4v-2H3V9h2Zm14-4v2h1v2h-2V7h-1V6h-2V4h2v1h2Zm0 12v2h-2v1h-2v-2h2v-1h2Zm1-2v2h-2v-2h1V9h2v6h-1ZM5 19v-2h2v1h2v2H7v-1H5Zm10 0H9v2h6v-2Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M6.569 15V8.455h4.41v1.14H7.953v1.56h2.8v1.141h-2.8v1.563h3.04V15H6.568Zm10.85-6.545V15h-1.195l-2.848-4.12h-.047V15h-1.384V8.455h1.214l2.825 4.116h.058V8.455h1.377Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-10 relative">
              <img src="/noones.png" />
              <div className="absolute -bottom-4 h-4 w-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 px-4">
          <form
            className="flex flex-col justify-between min-h-[50vh]"
            action={createNooneUser}
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
          <div className="flex gap-12 mt-8 justify-center">
            <GogleIcon />
            <FaceBookIcon />
            <AppleIcon />
          </div>
          <p className="text-center mt-8">
            Dont have an account?{" "}
            <span className="font-bold text-[#07b979]">Join</span>
          </p>
        </div>
      </div>)
}