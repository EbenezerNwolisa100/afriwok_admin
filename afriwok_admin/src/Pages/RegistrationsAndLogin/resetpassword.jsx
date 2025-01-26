// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/Images/Logo.svg';
// import { MailIcon, GlobeIcon } from 'lucide-react';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <div className="flex items-center justify-center py-3 md:py-2">
//         <img
//           src={Logo}
//           alt="Afriwok Logo"
//           className="w-20 md:w-32"
//         />
//       </div>
//       <hr />
//       <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">        

//         {/* Login form */}
//         <div className="w-full max-w-[400px] space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold font-sans tracking-tight">
//               Reset Password
//             </h1>
//             <p className="text-sm text-gray-500 font-sans">
//             Enter your registered email address
//             </p>
//           </div>

//           <form className="space-y-4">
//             <div className="space-y-1">
//             <p className="text-sm font-sans">Email Address*</p>
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="youremail@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full font-sans px-3 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
//                   required
//                 />
//                 <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 font-sans border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B]"
//             >
//               Reset Password
//             </button>

//             <div className="text-center">
//               <span className="text-sm font-sans text-gray-500">
//               Have access to your account?{' '}
//                 <Link
//                   href="/request-access"
//                   className="font-medium font-sans text-[#8B9D7B] hover:underline"
//                 >
//                   Login
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
//         <p className="text-sm text-gray-500 font-sans">
//           2024 Afriwok Inc.
//         </p>
//         <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
//           <GlobeIcon className="h-4 w-4 font-sans" />
//           <span className='font-sans'>ENG</span>
//         </button>
//       </footer>
//     </div>
//   );
// }





// import { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/Images/Logo.svg';
// import { MailIcon, GlobeIcon } from 'lucide-react';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleResetPassword = async (e) => {
//     e.preventDefault(); 
//     setIsLoading(true); 
//     setMessage(null);
//     setError(null);

//     try {
//       await axios.post(
//         'https://admin.dev.afriwok.ng/api/v1/admin/send-reset-link',
//         { email },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setMessage('Reset link sent successfully. Please check your email.');
//     } catch (err) {
//       setError(
//         err.response?.data?.message || 'An error occurred. Please try again.'
//       );
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
//         {/* Login form */}
//         <div className="w-full max-w-[400px] space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold font-sans tracking-tight">
//               Reset Password
//             </h1>
//             <p className="text-sm text-gray-500 font-sans">
//               Enter your registered email address
//             </p>
//           </div>

//           {/* Display error or success messages */}
//           {error && (
//             <div className="bg-red-100 font-sans text-red-700 p-3 rounded-md text-sm">
//               {error}
//             </div>
//           )}
//           {message && (
//             <div className="bg-green-100 text-green-700 p-3 rounded-md text-sm">
//               {message}
//             </div>
//           )}

//           <form className="space-y-4" onSubmit={handleResetPassword}>
//             <div className="space-y-1">
//               <p className="text-sm font-sans">Email Address*</p>
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="youremail@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full font-sans px-3 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
//                   required
//                 />
//                 <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               </div>
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-2 px-4 font-sans border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B] ${
//                 isLoading ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             >
//               {isLoading ? 'Sending...' : 'Reset Password'}
//             </button>

//             <div className="text-center">
//               <span className="text-sm font-sans text-gray-500">
//                 Have access to your account?{' '}
//                 <Link
//                   href="/request-access"
//                   className="font-medium font-sans text-[#8B9D7B] hover:underline"
//                 >
//                   Login
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
//         <p className="text-sm text-gray-500 font-sans">2024 Afriwok Inc.</p>
//         <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
//           <GlobeIcon className="h-4 w-4 font-sans" />
//           <span className="font-sans">ENG</span>
//         </button>
//       </footer>
//     </div>
//   );
// }








import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import Logo from "../../assets/Images/Logo.svg"
import { MailIcon, GlobeIcon } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSendOTP = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)
    setError(null)

    try {
      await axios.post(
        "https://admin.dev.afriwok.ng/api/v1/admin/send-reset-link",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      setMessage("OTP sent successfully. Redirecting to reset password page...")
      setTimeout(() => navigate("/newpassword", { state: { email } }), 3000)
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex items-center justify-center py-3 md:py-2">
        <img src={Logo || "/placeholder.svg"} alt="Afriwok Logo" className="w-20 md:w-32" />
      </div>
      <hr />
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-[400px] space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold font-sans tracking-tight">Reset Password</h1>
            <p className="text-sm text-gray-500 font-sans">Enter your registered email address</p>
          </div>
          {error && <div className="bg-red-100 font-sans text-red-700 p-3 rounded-md text-sm">{error}</div>}
          {message && <div className="bg-green-100 text-green-700 p-3 rounded-md text-sm">{message}</div>}
          <form className="space-y-4" onSubmit={handleSendOTP}>
            <div className="space-y-1">
              <p className="text-sm font-sans">Email Address*</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full font-sans px-3 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
                  required
                />
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 font-sans border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
            <div className="text-center">
              <span className="text-sm font-sans text-gray-500">
                Have access to your account?{" "}
                <Link to="/login" className="font-medium font-sans text-[#8B9D7B] hover:underline">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </main>
      <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-sans">2024 Afriwok Inc.</p>
        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
          <GlobeIcon className="h-4 w-4 font-sans" />
          <span className="font-sans">ENG</span>
        </button>
      </footer>
    </div>
  )
}

