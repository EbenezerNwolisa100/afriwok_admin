// import { useState } from "react";
// import Logo from "../../assets/Images/Logo.svg";
// import { LockIcon, EyeIcon, EyeOffIcon, GlobeIcon, MailIcon } from "lucide-react";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

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
//             <p className="text-sm font-sans text-gray-500">
//               Enter your registered email address
//             </p>
//           </div>

//           <form className="space-y-4">
//             <div className="space-y-1">
//               <p className="pt-2 font-sans">
//                 Email Address{" "}
//                 <span className="text-blue-700 font-sans font-bold">*</span>
//               </p>
//               <div className="space-y-1">
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="youremail@example.com"
//                   value=''
//                   className="w-full font-sans px-3 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
//                   required
//                 />
//                 <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               </div>
//             </div>

//               <p className="pt-2 font-sans">
//                 Enter New Password{" "}
//                 <span className="text-blue-700 font-sans font-bold">*</span>
//               </p>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="123456789"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
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

//             <button
//               type="submit"
//               className="w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B]"
//             >
//               Confirm
//             </button>
//           </form>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
//         <p className="text-sm text-gray-500 font-sans ">2024 Afriwok Inc.</p>
//         <button className="flex items-center space-x-1 text-sm font-sans text-gray-500 hover:text-gray-700">
//           <GlobeIcon className="h-4 w-4" />
//           <span className="font-sans">ENG</span>
//         </button>
//       </footer>
//     </div>
//   );
// }










// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Logo from "../../assets/Images/Logo.svg";
// import { LockIcon, EyeIcon, EyeOffIcon, GlobeIcon, MailIcon } from "lucide-react";

// export default function ResetPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage(null);
//     setError(null);

//     try {
//       await axios.post(
//         "https://admin.dev.afriwok.ng/api/v1/admin/reset-password",
//         {
//           email,
//           password,
//           token: otp,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setMessage("Password reset successful! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 3000); 
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to reset password. Please try again.");
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
//             <h1 className="text-2xl font-semibold font-sans tracking-tight">Reset Password</h1>
//             <p className="text-sm font-sans text-gray-500">Enter your details below</p>
//           </div>

//           <form className="space-y-4" onSubmit={handleResetPassword}>
//             {error && <div className="text-red-500 text-sm font-sans">{error}</div>}
//             {message && <div className="text-green-500 text-sm font-sans">{message}</div>}

//             <div className="space-y-1">
//               <label className="font-sans">
//                 Email Address<span className="text-blue-700 font-bold">*</span>
//               </label>
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

//             <div className="space-y-1">
//               <label className="font-sans">
//                 OTP<span className="text-blue-700 font-bold">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full font-sans px-3 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-1">
//               <label className="font-sans">
//                 New Password<span className="text-blue-700 font-bold">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter new password"
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
//                   {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className={`w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B] ${
//                 isLoading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={isLoading}
//             >
//               {isLoading ? "Processing..." : "Confirm"}
//             </button>
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






import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import Logo from "../../assets/Images/Logo.svg"
import { LockIcon, EyeIcon, EyeOffIcon, GlobeIcon, MailIcon } from "lucide-react"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email)
    }
  }, [location.state])

  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //   return regex.test(password)
  // }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)
    setError(null)

    // if (!validatePassword(password)) {
    //   setError(
    //     "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    //   )
    //   setIsLoading(false)
    //   return
    // }

    // if (password !== confirmPassword) {
    //   setError("Passwords do not match.")
    //   setIsLoading(false)
    //   return
    // }

    try {
      await axios.post(
        "https://admin.dev.afriwok.ng/api/v1/admin/reset-password",
        { email, password, token: otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      setMessage("Password reset successful! Redirecting to login...")
      setTimeout(() => navigate("/reset_successful"), 3000)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password. Please try again.")
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
            <p className="text-sm font-sans text-gray-500">Enter your details below</p>
          </div>
          <form className="space-y-4" onSubmit={handleResetPassword}>
            {error && <div className="text-red-500 text-sm font-sans">{error}</div>}
            {message && <div className="text-green-500 text-sm font-sans">{message}</div>}
            <div className="space-y-1">
              <label className="font-sans">
                Email Address<span className="text-blue-700 font-bold">*</span>
              </label>
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
            <div className="space-y-1">
              <label className="font-sans">
                OTP<span className="text-blue-700 font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full font-sans px-3 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-sans">
                New Password<span className="text-blue-700 font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
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
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-sans">
                Confirm New Password<span className="text-blue-700 font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full font-sans px-3 py-2 pl-10 pr-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B9D7B] focus:border-transparent"
                  required
                />
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Confirm"}
            </button>
          </form>
        </div>
      </main>
      <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-sans">2024 Afriwok Inc.</p>
        <button className="flex items-center space-x-1 text-sm font-sans text-gray-500 hover:text-gray-700">
          <GlobeIcon className="h-4 w-4" />
          <span className="font-sans">ENG</span>
        </button>
      </footer>
    </div>
  )
}

