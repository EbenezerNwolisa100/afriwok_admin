import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.svg";
import { GlobeIcon } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex items-center justify-center py-3 md:py-2">
        <img src={Logo} alt="Afriwok Logo" className="w-20 md:w-32" />
      </div>
      <hr />
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Login form */}
        <div className="w-full max-w-[400px] space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#8B9467] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="fill-current text-white"
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold font-sans tracking-tight">
              Successful
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Password reset was Successful
            </p>
          </div>

          <form className="space-y-4">
            <Link to={`/login`}>
            <button
              type="submit"
              className="w-full py-2 px-4 font-sans border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9467] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B]"
            >
              Proceed to Login
            </button>
            </Link>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-sans">2024 Afriwok Inc.</p>
        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
          <GlobeIcon className="h-4 w-4 font-sans" />
          <span className="font-sans">ENG</span>
        </button>
      </footer>
    </div>
  );
}
