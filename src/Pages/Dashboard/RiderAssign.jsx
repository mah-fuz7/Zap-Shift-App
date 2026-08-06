import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const RiderAssign = () => {
  const axiosSecure = useAxios();
const queryClient=useQueryClient();
//   fetch the rider data
  const { data: riders = [], isLoading } = useQuery({
    queryKey: ["rider"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data.result;
    },
  });
//transtack  Mutation 
const mutation =useMutation( {
    mutationFn:({id ,status,email})=>axiosSecure.patch(`/rider/${id}`,{status,email}),
    onSuccess : () =>{
        queryClient.invalidateQueries({
            queryKey:["rider"],
        });
    },
    onError: (error) => {
        console.log(error)
    }
});

//   handle Request Accept btn
 const handleAccept =(rider) =>{
    mutation.mutate({
        id:rider._id,
        status:"Accepted",
        email:rider.email
    })

 }
//  handle decline req
const handleDecline =(id)=>{
    mutation.mutate({
id,
status:"Declined"
    })
}

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="overflow-x-auto p-5">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Rider Name</th>
            <th>Rider Email</th>
            <th>Status</th>
            <th>Accept</th>
            <th>Decline Request</th>
          </tr>
        </thead>

        <tbody>
          {riders.map((rider, index) => (
            <tr key={rider._id}>
              <td>{index + 1}</td>
              <td>{rider.name}</td>
              <td>{rider.email}</td>

              <td>
                <span
                 className={`badge ${
  rider.status === "pending"
    ? "badge-warning"
    : rider.status === "Accepted"
    ? "badge-success"
    : rider.status === "Declined"
    ? "badge-error"
    : "badge-neutral"
}`}
                >
                  {rider.status}
                </span>
              </td>

              <td>
                <button
                  className="btn btn-success btn-sm"
                  disabled={rider.status !== "pending"}
                  onClick={() => handleAccept(rider)}
                >
                  Accept
                </button>
              </td>

              <td>
                <button
                  className="btn btn-error btn-sm"
                  disabled={rider.status !== "pending"}
                  onClick={() => handleDecline(rider._id)}
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiderAssign;