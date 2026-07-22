import authimg from "../../assets/authimage.png";
import logo from "../../assets/brand.png";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const navigation=useNavigate()
  const { signInWithGoogle, registerUser,updateUserProfile,setUser,user } = useAuth();
  // password show and hide state
  const [showPassword, setShowPassword] = useState(false);
  // handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
navigation('/')    
});
  };

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey=import.meta.env.VITE_IMGBB_API_KEY;
  const imageUploadURL=`https://api.imgbb.com/1/upload?key=${imageHostKey}`

  // handle email password sign in
  const handleEmailPasswordSignIn = async(data) => {
    console.log(data);
    try {

// Upload image
const formData=new FormData();
formData.append("image",data.photo[0])
const imageRes=await axios.post(imageUploadURL,formData);
const photoURL=imageRes.data.data.display_url
console.log(photoURL)


// create firebase user
const result=await registerUser(data.email, data.password)
console.log(result)
      
// update firebase profile

await updateUserProfile({
 displayName:data.name,
  photoURL
})

// update user State
setUser({
      ...result.user,
      displayName: data.name,
      photoURL,
    });
    navigation('/')    

console.log(user)

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-6">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <img src={logo} alt="brand" className="h-20 w-20 mb-4" />

          {/* Heading */}
          <h1 className="text-4xl font-bold text-secondary">
            Create an Account
          </h1>

          <p className="text-gray-500 mt-1 mb-4">Register with ZapShift</p>

          

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleEmailPasswordSignIn)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
<label>Image</label>
{/* Photo */}
          <div className="w-full h-12    mb-4">
<input
{...register("photo", {
                  required: true,
                })}
 type="file" className="file-input file-input-success" placeholder="Your photo" />
          </div>
           {errors.name?.type === 'required' && (
                <p className="mt-1 text-sm text-red-600">
                 Photo is required
                </p>
              )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full h-10 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-primary"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 rounded-md bg-primary text-secondary font-semibold hover:opacity-90 transition"
            >
              Register
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?
            <Link to={'/login'} className="text-primary font-semibold ml-1">
              Login
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full h-10 border border-gray-300 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
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
