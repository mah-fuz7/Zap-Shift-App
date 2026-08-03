import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const PaymentHistory = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-history?email=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">
        Payment History ({payments.length})
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table table-zebra">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Customer Email</th>
              <th>Transaction ID</th>
              <th>Tracking ID</th>
              <th>Payment Status</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>

                <td>{payment.customerEmail}</td>

                <td className="font-mono text-xs">
                  {payment.transactionId}
                </td>

                <td className="font-semibold text-primary">
                  {payment.trackingId}
                </td>

                <td>
                  <span className="badge badge-success">
                    {payment.paymentStatus}
                  </span>
                </td>

                <td>${payment.amount}</td>

                <td>
                  {new Date(payment.paidAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}

            {payments.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  No payment history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;