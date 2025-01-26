// import { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../assets/Images/Logo.svg';
// import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, GlobeIcon } from 'lucide-react';

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         'https://admin.dev.afriwok.ng/api/v1/admin/login',
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Login successful:', response.data);
//       alert('Login successful!');
//       navigate('/');
      
//     } catch (err) {
//       console.error('Login failed:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'An error occurred. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <div className="flex items-center justify-center py-3 md:py-2">
//         <img src={Logo} alt="Afriwok Logo" className="w-20 md:w-32" />
//       </div>
//       <hr />
//       <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
//         <div className="w-full max-w-[400px] space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold font-sans tracking-tight">
//               Log in to your account
//             </h1>
//             <p className="text-sm font-sans text-gray-500">
//               Enter your email and password to Login
//             </p>
//           </div>

//           {error && (
//             <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
//               {error}
//             </div>
//           )}

//           <form className="space-y-4" onSubmit={handleLogin}>
//             <div className="space-y-1">
//               <p className="font-sans">
//                 Email Address <span className="text-blue-700 font-sans font-bold">*</span>
//               </p>
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="youremail@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-3 py-2 pl-10 font-sans text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
//                   required
//                 />
//                 <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               </div>

//               <p className="pt-2 font-sans">
//                 Password <span className="text-blue-700 font-sans font-bold">*</span>
//               </p>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full font-sans px-3 py-2 pl-10 pr-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
//                   required
//                 />
//                 <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <EyeOffIcon className="h-4 w-4" />
//                   ) : (
//                     <EyeIcon className="h-4 w-4" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className="h-4 w-4 text-[#8B9D7B] focus:ring-[#8B9D7B] border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="remember"
//                 className="text-sm font-medium font-sans text-gray-700"
//               >
//                 Keep me logged in
//               </label>
//             </div>

//             <button
//               type="submit"
//               className={`w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B] ${
//                 isLoading ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//               disabled={isLoading}
//             >
//               {isLoading ? 'Logging in...' : 'Log in'}
//             </button>

//             <div className="text-center">
//               <span className="text-sm text-gray-500 font-sans">
//                 Lost Access to account?{' '}
//                 <Link
//                   to="/request-access"
//                   className="font-medium text-[#8B9D7B] font-sans hover:underline"
//                 >
//                   Request
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </main>

//       <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
//         <p className="text-sm text-gray-500 font-sans">2024 Afriwok Inc.</p>
//         <button className="flex items-center space-x-1 text-sm font-sans text-gray-500 hover:text-gray-700">
//           <GlobeIcon className="h-4 w-4" />
//           <span className="font-sans">ENG</span>
//         </button>
//       </footer>
//     </div>
//   );
// }









import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/Logo.svg";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, GlobeIcon } from "lucide-react";

export default function LoginPage() {
  // State variables
  const [showPassword, setShowPassword] = useState(false); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://admin.dev.afriwok.ng/api/v1/admin/login", 
        {
          email, 
          password, 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        const { token, user, role } = response.data.data;

        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("role", JSON.stringify(role));

        console.log("Login successful:", response.data);
        alert("Login successful!");

        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-3 md:py-2">
        <img src={Logo} alt="Afriwok Logo" className="w-20 md:w-32" />
      </div>
      <hr />

      {/* Login Form Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-[400px] space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold font-sans tracking-tight">
              Log in to your account
            </h1>
            <p className="text-sm font-sans text-gray-500">
              Enter your email and password to Login
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 font-sans p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="space-y-1">
              <p className="font-sans">
                Email Address{" "}
                <span className="text-blue-700 font-sans font-bold">*</span>
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 pl-10 font-sans text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
                  required
                />
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <p className="font-sans">
                Password{" "}
                <span className="text-blue-700 font-sans font-bold">*</span>
              </p>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#8B9D7B] focus:ring-[#8B9D7B] border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium font-sans text-gray-700"
              >
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
            <div className="text-center">
               <span className="text-sm text-gray-500 font-sans">
                 Lost Access to account?{' '}
                 <Link
                   to={`/resetpassword`}
                   className="font-medium text-[#8B9D7B] font-sans hover:underline"
                 >
                   Request
                 </Link>
               </span>
             </div>
          </form>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-sans">2024 Afriwok Inc.</p>
        <button className="flex items-center space-x-1 text-sm font-sans text-gray-500 hover:text-gray-700">
          <GlobeIcon className="h-4 w-4" />
          <span className="font-sans">ENG</span>
        </button>
      </footer>
    </div>
  );
}
