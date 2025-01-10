import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.svg";
import { GlobeIcon } from "lucide-react";

export default function LoginPage() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

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
            <h1 className="text-2xl font-semibold font-sans tracking-tight">
              Enter OTP
            </h1>
            <p className="text-sm font-sans text-gray-500">
              OTP has been sent to tggreat****@afriwok.com
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-center items-center space-x-6">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-20 h-14 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border font-sans border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B9D7B] hover:bg-[#7A8C6A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B9D7B]"
            >
              Confirm
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-500 font-sans">
                Didn&rsquo;t receive OTP?{" "}
                <Link
                  href="/request-access"
                  className="font-medium text-[#8B9D7B] font-sans hover:underline"
                >
                  Resend <span className="font-sans text-black">in 00:12</span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-sans ">2024 Afriwok Inc.</p>
        <button className="flex items-center space-x-1 text-sm font-sans text-gray-500 hover:text-gray-700">
          <GlobeIcon className="h-4 w-4" />
          <span className="font-sans">ENG</span>
        </button>
      </footer>
    </div>
  );
}
