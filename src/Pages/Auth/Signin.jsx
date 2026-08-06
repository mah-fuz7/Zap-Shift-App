import authimg from "../../assets/authimage.png";
import logo from "../../assets/brand.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";

const SignIn = () => {
  const { signInWithGoogle, login } = useAuth();
  const navigation = useNavigate();
  const axiosSecure = useAxios();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async (result) => {
        const userInfo = {
          userName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        try {
          const res = await axiosSecure.post("/users", userInfo);
          console.log(res.data);
          navigation("/");
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // handle email/password login
  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigation("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-6">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <img src={logo} alt="ZapShift" className="h-20 w-20 mb-4" />

          {/* Heading */}
          <h1 className="text-4xl font-bold text-secondary">Welcome Back</h1>

          <p className="text-gray-500 mt-1 mb-6">Login with ZapShift</p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 w-full h-10 px-4 border rounded-md outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`mt-1 w-full h-10 px-4 border rounded-md outline-none focus:ring-2 transition ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
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
              className="w-full h-10 bg-primary text-secondary font-semibold rounded-md hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?
            <a href="/signup" className="ml-1 text-primary font-semibold">
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
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-10 border border-gray-300 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
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