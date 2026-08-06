import { useForm, useWatch } from "react-hook-form";
import riderImg from "../assets/agent-pending.png";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const serviceCenters = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail"],
  Chattogram: ["Chattogram", "Cox's Bazar", "Comilla", "Feni"],
  Rajshahi: ["Rajshahi", "Bogura", "Naogaon"],
  Khulna: ["Khulna", "Jessore", "Satkhira"],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj"],
  Rangpur: ["Rangpur", "Dinajpur", "Kurigram"],
  Barishal: ["Barishal", "Patuakhali", "Bhola"],
  Mymensingh: ["Mymensingh", "Netrokona", "Jamalpur"],
};
const Rider = () => {
   const axiosSecure=useAxios()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

 const {user}=useAuth() //user from firebase auth

    useEffect(()=>{
        //using useEffect beause if user Null instanly it will not update
if(user){
    reset({
        name:user.displayName,
        email:user.email,
    })
}
    },[user,reset])
    // console.log(user)

  const selectedRegion = useWatch({
    control,
    name: "region",
  });

  const districts = serviceCenters[selectedRegion] || [];

//   post the Rider form data

 const mutation = useMutation({
  mutationFn: (data) => axiosSecure.post("/rider", data),

  onSuccess: (res) => {
    console.log(res.data);

    if (res.data.success) {
      Swal.fire({
        icon: "success",
        title: res.data.message,
      });
      reset();
    } else {
      Swal.fire({
        icon: "warning",
        title: res.data.message,
      });
    }
  },

  onError: (error) => {
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  },
});

  const onSubmit = (data) => {
    
    mutation.mutate(data)
    console.log(data);
    reset();
  };

  return (
    <div className="bg-base-200 min-h-screen py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10">

        <div className="grid lg:grid-cols-2 gap-10 items-start ">

          {/* Left Side */}
          <div>

            <h1 className="text-5xl font-bold text-[#03373D] mb-3">
              Be a Rider
            </h1>

            <p className="text-gray-500 mb-10">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments—we
              deliver on time, every time.
            </p>

            <h2 className="text-3xl font-semibold mb-6">
              Tell us about yourself
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >

              {/* Name */}
              <div>
                <label className="font-medium">Your Name</label>

                <input
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.name?.message}
                </p>
              </div>

              {/* Driving License */}
              <div>
                <label className="font-medium">
                  Driving License Number
                </label>

                <input
                  className="input input-bordered w-full"
                  placeholder="Driving License Number"
                  {...register("license", {
                    required: "License is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.license?.message}
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="font-medium">Email</label>

                <input
                  type="email"
                  
                  className="input input-bordered w-full"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.email?.message}
                </p>
              </div>

              {/* Region */}
              <div>
                <label className="font-medium">Region</label>

                <select
                  className="select select-bordered w-full"
                  {...register("region", {
                    required: "Select a region",
                  })}
                >
                  <option value="">Select your Region</option>

                  {Object.keys(serviceCenters).map((region) => (
                    <option key={region}>{region}</option>
                  ))}
                </select>

                <p className="text-red-500 text-sm">
                  {errors.region?.message}
                </p>
              </div>

              {/* District */}
              <div>
                <label className="font-medium">District</label>

                <select
                  className="select select-bordered w-full"
                  {...register("district", {
                    required: "Select a district",
                  })}
                >
                  <option value="">Select your District</option>

                  {districts.map((district) => (
                    <option key={district}>{district}</option>
                  ))}
                </select>

                <p className="text-red-500 text-sm">
                  {errors.district?.message}
                </p>
              </div>

              {/* NID */}
              <div>
                <label className="font-medium">NID Number</label>

                <input
                  className="input input-bordered w-full"
                  placeholder="NID Number"
                  {...register("nid", {
                    required: "NID is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.nid?.message}
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="font-medium">Phone Number</label>

                <input
                  className="input input-bordered w-full"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.phone?.message}
                </p>
              </div>

              {/* Bike Model */}
              <div>
                <label className="font-medium">
                  Bike Brand Model & Year
                </label>

                <input
                  className="input input-bordered w-full"
                  placeholder="Bike Brand Model & Year"
                  {...register("bikeModel", {
                    required: "Bike model is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.bikeModel?.message}
                </p>
              </div>

              {/* Registration */}
              <div>
                <label className="font-medium">
                  Bike Registration Number
                </label>

                <input
                  className="input input-bordered w-full"
                  placeholder="Bike Registration Number"
                  {...register("bikeRegistration", {
                    required: "Registration number is required",
                  })}
                />

                <p className="text-red-500 text-sm">
                  {errors.bikeRegistration?.message}
                </p>
              </div>

              {/* About */}
              <div>
                <label className="font-medium">
                  Tell Us About Yourself
                </label>

                <textarea
                  rows="4"
                  className="textarea textarea-bordered w-full"
                  placeholder="Tell Us About Yourself"
                  {...register("about")}
                ></textarea>
              </div>

              <button
                className="btn bg-lime-300 hover:bg-lime-400 border-none w-full"
              >
                Submit
              </button>

            </form>
          </div>

          {/* Right Side */}
          <div className="flex justify-start  ">
            <img
              src={riderImg}
              alt="Rider"
              className="max-w-md w-full "
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rider;