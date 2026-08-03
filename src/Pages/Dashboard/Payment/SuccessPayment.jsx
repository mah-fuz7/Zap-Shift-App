import { Link, useLocation, useSearchParams } from "react-router";
import { FiCheckCircle, FiPackage, FiMapPin, FiCalendar } from "react-icons/fi";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

const SuccessPayment = () => {
  const location = useLocation();
  const parcelData = location.state?.parcelData;

  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxios();
  console.log(sessionId);
  console.log(paymentInfo);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with success icon */}
          <div className="bg-gradient-to-r from-[#CAEB66] to-[#b8d654] px-6 py-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4">
                <FiCheckCircle className="w-16 h-16 text-[#CAEB66]" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">
              Payment Successful!
            </h1>
            <p className="text-[#1a1a2e] opacity-90">
              Your parcel booking is confirmed
            </p>
          </div>

          {/* Order Details */}
          <div className="px-6 py-8">
            {parcelData ? (
              <>
                {/* Parcel Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FiPackage className="w-5 h-5 text-[#CAEB66] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Parcel Type</p>
                      <p className="font-semibold text-gray-900">
                        {parcelData.parcelType || "Standard Delivery"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <FiMapPin className="w-5 h-5 text-[#CAEB66] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Delivery Location</p>
                      <p className="font-semibold text-gray-900">
                        {parcelData.deliveryAddress || "Destination Address"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiCalendar className="w-5 h-5 text-[#CAEB66] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Delivery Date</p>
                      <p className="font-semibold text-gray-900">
                        {parcelData.deliveryDate ||
                          new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600">Parcel Weight</span>
                    <span className="font-semibold">
                      {parcelData.weight || "N/A"} kg
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-semibold">
                      ৳ {parcelData.price || "0"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-bold text-lg text-[#1a1a2e]">
                      Total Amount
                    </span>
                    <span className="text-2xl font-bold text-[#CAEB66]">
                      ৳ {parcelData.price || "0"}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">
                  Payment completed successfully!
                </p>
                <p className="text-2xl font-bold text-[#CAEB66]">
                  Thank you for your order
                </p>
              </div>
            )}

            {/* Transaction ID */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-center">
              <p className="text-xs text-gray-600 mb-1">Transaction ID</p>
              <p className="font-mono font-semibold text-[#1a1a2e] break-all">
                {paymentInfo.transactionId}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to="/dashboard"
                className="w-full btn bg-[#CAEB66] text-[#1a1a2e] font-bold rounded-lg hover:bg-[#b8d654] transition-colors"
              >
                Track Your Parcel
              </Link>

              <Link
                to="/"
                className="w-full btn border-2 border-[#CAEB66] text-[#CAEB66] bg-transparent font-bold rounded-lg hover:bg-[#CAEB66] hover:text-[#1a1a2e] transition-colors"
              >
                Back to Home
              </Link>
            </div>

            {/* Support Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-sm">
              <p className="text-gray-600 mb-1">Need help?</p>
              <p className="font-semibold text-[#1a1a2e] mb-2">
                Contact Our Support Team
              </p>
              <p className="text-gray-500">
                📧 support@zapshift.com | 📞 +880 1XXX-XXXXXX
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            ✓ Secure Payment • 100% Encrypted • ISO Certified
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
