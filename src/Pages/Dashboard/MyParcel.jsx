import { useQuery } from "@tanstack/react-query";
import { FiTrash2, FiCreditCard } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const MyParcel = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ["parcels"],
        queryFn: async () => {
            const res = await axios.get(`/parcels?email=${user.email}`);
            return res.data;
        },
    });

    const handleDelete = async (id) => {
        console.log(id)
        const result = await Swal.fire({
            title: "Delete Parcel?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Delete",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`/parcels/${id}`);
                Swal.fire("Deleted!", "Parcel has been deleted.", "success");
                refetch();
            } catch (error) {
                console.error("Delete error:", error);
                Swal.fire("Error!", "Failed to delete parcel.", "error");
            }
        }
    };

    const handlePay = async(parcel) => {
                console.log(parcel)

        
        // Add payment logic here
        const parcelInfo={
            cost:parcel.cost ,
            parcelId:parcel._id,
            senderEmail:parcel.senderEmail,
            parcelName:parcel.parcelName,
            trackingId:parcel.trackingId

        }
        const result=await axios.post('/create-checkout-session',parcelInfo)
        console.log(result.data.url)
        window.location.assign(result.data.url)
    };

    if (parcels.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">No parcels found.</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Parcels</h1>

            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="text-gray-800">Parcel Name</th>
                            <th className="text-gray-800">Type</th>
                            <th className="text-gray-800">delivery Status</th>
                            <th className="text-gray-800">Weight (kg)</th>
                            <th className="text-gray-800">Sender</th>
                            <th className="text-gray-800">Receiver</th>
                            <th className="text-gray-800">From</th>
                            <th className="text-gray-800">To</th>
                            <th className="text-gray-800">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel) => (
                            <tr key={parcel._id} className="hover">
                                <td className="font-medium text-gray-700">
                                    {parcel.parcelName}
                                </td>
                                <td>
                                    <span className="badge badge-sm capitalize">
                                        {parcel.parcelType}
                                    </span>
                                </td>
                                <td>
                                    <span className="  capitalize">
                                        {parcel.deliveryStatus}
                                    </span>
                                </td>
                                <td>{parcel.parcelWeight}</td>
                                <td className="text-sm">
                                    <div>{parcel.senderName}</div>
                                    <div className="text-gray-500 text-xs">
                                        {parcel.senderEmail}
                                    </div>
                                </td>
                                <td className="text-sm">
                                    <div>{parcel.receiverName}</div>
                                    <div className="text-gray-500 text-xs">
                                        {parcel.receiverEmail}
                                    </div>
                                </td>
                                <td>{parcel.senderDistrict}</td>
                                <td>{parcel.receiverDistrict}</td>
                                <td>
                                    <div className="flex gap-2">
<button
  onClick={() => handlePay(parcel)}
  disabled={parcel.paymentStatus === "paid"}
  className="btn btn-sm btn-success gap-1 text-white disabled:opacity-50"
  title="Pay"
>
  <FiCreditCard />
  {parcel.paymentStatus === "Unpaid" ? "Pay" : "Paid"}
</button>
                                        <button
                                            onClick={() =>
                                                handleDelete(parcel._id)
                                            }
                                            className="btn btn-sm btn-error gap-1 text-white"
                                            title="Delete"
                                        >
                                            <FiTrash2 />
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                {parcels.map((parcel) => (
                    <div
                        key={parcel._id}
                        className="bg-white rounded-lg border border-gray-200 p-4 space-y-3"
                    >
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">
                                Parcel Name
                            </p>
                            <p className="font-medium text-gray-800">
                                {parcel.parcelName}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">
                                    Type
                                </p>
                                <p className="text-sm capitalize text-gray-700">
                                    {parcel.parcelType}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">
                                    Weight (kg)
                                </p>
                                <p className="text-sm text-gray-700">
                                    {parcel.parcelWeight}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">
                                Sender
                            </p>
                            <p className="text-sm text-gray-700">
                                {parcel.senderName}
                            </p>
                            <p className="text-xs text-gray-500">
                                {parcel.senderEmail}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">
                                Receiver
                            </p>
                            <p className="text-sm text-gray-700">
                                {parcel.receiverName}
                            </p>
                            <p className="text-xs text-gray-500">
                                {parcel.receiverEmail}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">
                                    From
                                </p>
                                <p className="text-sm text-gray-700">
                                    {parcel.senderDistrict}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">
                                    To
                                </p>
                                <p className="text-sm text-gray-700">
                                    {parcel.receiverDistrict}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <button
                                onClick={() => handlePay(parcel)}
                                className="flex-1 btn btn-sm btn-success gap-1 text-white"
                                title="Pay"
                            >
                                <FiCreditCard />
                                Pay
                            </button>
                            <button
                                onClick={() =>
                                    handleDelete(parcel._id)
                                }
                                className="flex-1 btn btn-sm btn-error gap-1 text-white"
                                title="Delete"
                            >
                                <FiTrash2 />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyParcel;