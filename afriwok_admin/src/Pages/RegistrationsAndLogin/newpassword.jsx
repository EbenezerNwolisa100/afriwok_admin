import { useState } from 'react';
import Logo from '../../assets/Images/Logo.svg'
import { LockIcon, EyeIcon, EyeOffIcon, GlobeIcon } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex items-center justify-center py-3 md:py-2">
        <img
          src={Logo}
          alt="Afriwok Logo"
          className="w-20 md:w-32"
        />
      </div>
      <hr />
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">        

        {/* Login form */}
        <div className="w-full max-w-[400px] space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold font-sans tracking-tight">
            Reset Password
            </h1>
            <p className="text-sm font-sans text-gray-500">
            Enter your registered email address
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-1">
            <p className="pt-2 font-sans">New Password <span className='text-blue-700 font-sans font-bold'>*</span></p>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full font-sans px-3 py-2 pl-10 pr-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
                  required
                />
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>

              <p className="pt-2 font-sans">Confirm Password <span className='text-blue-700 font-sans font-bold'>*</span></p>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full font-sans px-3 py-2 pl-10 pr-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
                  required
                />
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B]"
            >
              Confirm
            </button>

          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-sans ">
          2024 Afriwok Inc.
        </p>
        <button className="flex items-center space-x-1 text-sm font-sans text-gray-500 hover:text-gray-700">
          <GlobeIcon className="h-4 w-4" />
          <span className='font-sans'>ENG</span>
        </button>
      </footer>
    </div>
  );
}
