import authimg from "../../assets/authimage.png";
import logo from "../../assets/brand.png";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { signInWithGoogle,login}=useAuth()
const navigation=useNavigate()
  // handle google signin
    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(() => {
  navigation('/')
      });
    };
  const handleLogin = ()=>{
login()
.then(()=>{
  navigation('/')
})
  }
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-6">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <img
            src={logo}
            alt="ZapShift"
            className="h-20 w-20 mb-4"
          />

          {/* Heading */}
          <h1 className="text-4xl font-bold text-secondary">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-1 mb-6">
            Login with ZapShift
          </p>

          {/* Form */}
          <form className="space-y-3">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Email"
                className="mt-1 w-full h-10 px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Password"
                className="mt-1 w-full h-10 px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-left">
              <a
                href="/forgot-password"
                className="text-sm text-gray-500 hover:text-primary"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full h-10 bg-primary text-secondary font-semibold rounded-md hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?
            <a
              href="/signup"
              className="ml-1 text-primary font-semibold"
            >
              Register
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button           
           onClick={handleGoogleSignIn}
 className="w-full h-10 border border-gray-300 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">
              Login with Google
            </span>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#F9FBEF]">
        <img
          src={authimg}
          alt="Delivery"
          className="w-[55%] max-w-sm object-contain"
        />
      </div>
    </div>
  );
};

export default SignIn;