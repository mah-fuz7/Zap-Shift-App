import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

export default function SendParcelForm() {
  const { register, handleSubmit ,control} = useForm({
    defaultValues: {
      parcelType: "document",
      parcelName: "",
      parcelWeight: "",
      senderName: "",
      senderEmail: "",
      senderDistrict: "",
      pickupInstruction: "",
      receiverName: "",
      receiverEmail: "",
      receiverDistrict: "",
      deliveryInstruction: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const Data = useLoaderData();
  const DuplicateRegions = Data.map((r) => r.region);
  const region = [...new Set(DuplicateRegions)];
// watch the data
const senderRegion=useWatch({control,name:'senderRegion'})
const receiverRegion=useWatch({control,name:'receiverRegion'})

  const districsByRegion =(region)=>{
    const regionDistrict=Data.filter(w=>w.region === region)
    const districts=regionDistrict.map(d=>d.district)
    return districts
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Send A Parcel</h1>
        <p className="text-gray-600 mb-6">Enter Sender parcel details</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Parcel Type */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                className="radio radio-sm"
              />
              <span className="text-sm font-medium">Document</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="radio radio-sm"
              />
              <span className="text-sm font-medium">Not-Document</span>
            </label>
          </div>

          {/* Parcel Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                {...register("parcelName", {
                  required: "Parcel name is required",
                })}
                className="input input-bordered w-full placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parcel Weight (Kg)
              </label>
              <input
                type="number"
                placeholder="Parcel Weight (Kg)"
                {...register("parcelWeight", {
                  required: "Weight is required",
                })}
                className="input input-bordered w-full placeholder-gray-400"
              />
            </div>
          </div>

          {/* Sender & Receiver Details Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sender Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Sender Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sender Name"
                    {...register("senderName", {
                      required: "Sender name is required",
                    })}
                    className="input input-bordered w-full placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sender Email
                  </label>
                  <input
                    type="email"
                    placeholder="Sender Email "
                    {...register("senderEmail", {
                      required: "Email  is required",
                    })}
                    className="input input-bordered w-full placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sender Region
                  </label>
                  {/* regiion */}
                  <select
                    defaultValue=""
                    {...register("senderRegion", {
                      required: "region is required",
                    })}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Sender Region
                    </option>

                    {region.map((district, idx) => (
                      <option key={idx} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                   <label className="block text-sm font-medium text-gray-700 my-2">
                    Sender District
                  </label>
                                    {/* District */}

                  <select
                    defaultValue=""
                    {...register("senderDistrict", {
                      required: "District is required",
                    })}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Sender District
                    </option>

                   {
                    districsByRegion(senderRegion).map((r,i)=><option key={i} value={r}>{r}</option>)
                   }
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Instruction
                  </label>
                  <textarea
                    placeholder="Pickup Instruction"
                    {...register("pickupInstruction")}
                    className="textarea textarea-bordered w-full placeholder-gray-400"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Receiver Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    placeholder="Receiver Name"
                    {...register("receiverName", {
                      required: "Receiver name is required",
                    })}
                    className="input input-bordered w-full placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receiver Email
                  </label>
                  <input
                    type="email"
                    placeholder="Receiver Email "
                    {...register("receiverEmail", {
                      required: "Email  is required",
                    })}
                    className="input input-bordered w-full placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receiver Region
                  </label>
                  <select
                    {...register("receiverRegion", {
                      required: "Region is required",
                    })}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Sender Region
                    </option>
                    {region.map((region, idx) => (
                      <option
                        key={idx}
                        value={
                          region === "Select Sender District" ? "" : region
                        }
                      >
                        {region}
                      </option>
                    ))}
                  </select>
                  <label className="block text-sm font-medium text-gray-700 my-2">
                    Receiver District
                  </label>
                  <select
                    {...register("receiverDistrict", {
                      required: "District is required",
                    })}
                    className="select select-bordered w-full"
                  >
                    <option value="" disabled>
                      Select Sender District
                    </option>
                    {
                      districsByRegion(receiverRegion).map((district,i)=><option key={i} value={district}>{district}</option>)
                    }
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Instruction
                  </label>
                  <textarea
                    placeholder="Delivery Instruction"
                    {...register("deliveryInstruction")}
                    className="textarea textarea-bordered w-full placeholder-gray-400"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup Time Note */}
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Pickup Time:</span> 10am-7pm Approx.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn btn-primary text-white font-semibold"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
