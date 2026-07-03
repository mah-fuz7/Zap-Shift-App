import authimg from "../../assets/authimage.png";
import logo from "../../assets/brand.png";
import { FcGoogle } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";

const SignUp = () => {
  return (
   <div className="min-h-screen flex">
  {/* Left Side */}
  <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-6">
    <div className="w-full max-w-sm">
      {/* Logo */}
      <img
        src={logo}
        alt="brand"
        className="h-20 w-20 mb-4"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-secondary">
        Create an Account
      </h1>

      <p className="text-gray-500 mt-1 mb-4">
        Register with ZapShift
      </p>

      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <FaRegUserCircle className="text-3xl text-gray-400" />
      </div>

      {/* Form */}
      <form className="space-y-3">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="mt-1 w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button className="w-full h-10 bg-primary text-secondary font-semibold rounded-md">
          Register
        </button>
      </form>

      {/* Login */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?
        <a href="/signin" className="text-primary font-semibold ml-1">
          Login
        </a>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-3">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-400">Or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Google */}
      <button className="w-full h-10 border border-gray-300 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition">
        <FcGoogle className="text-xl" />
        Register with Google
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="hidden lg:flex w-1/2 bg-[#F9FBEF] items-center justify-center">
    <img
      src={authimg}
      alt="Delivery Illustration"
      className="w-[55%] max-w-sm"
    />
  </div>
</div>
  );
};

export default SignUp;