import { Link, useLocation, useNavigate } from "react-router";
import { FiX, FiPackage, FiMapPin, FiCalendar, FiArrowLeft } from "react-icons/fi";

const CancelPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const parcelData = location.state?.parcelData;

  const handleRetryPayment = () => {
    navigate("/send-parcel", { state: { parcelData } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Cancel Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with cancel icon */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4">
                <FiX className="w-16 h-16 text-red-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Payment Cancelled
            </h1>
            <p className="text-red-100">Your transaction was not completed</p>
          </div>

          {/* Message Section */}
          <div className="px-6 py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 text-center font-medium">
                Your payment has been cancelled. Your parcel booking is not
                confirmed yet.
              </p>
            </div>

            {/* Parcel Details */}
            {parcelData && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-[#1a1a2e] mb-4">
                  Parcel Information
                </h3>

                <div className="flex items-start gap-3 mb-4">
                  <FiPackage className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Parcel Type</p>
                    <p className="font-semibold text-gray-900">
                      {parcelData.parcelType || "Standard Delivery"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <FiMapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Delivery Location</p>
                    <p className="font-semibold text-gray-900">
                      {parcelData.deliveryAddress || "Destination Address"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiCalendar className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Delivery Date</p>
                    <p className="font-semibold text-gray-900">
                      {parcelData.deliveryDate ||
                        new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Amount Section */}
            {parcelData && (
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="text-xl font-bold text-[#1a1a2e]">
                    ৳ {parcelData.price || "0"}
                  </span>
                </div>
              </div>
            )}

            {/* Cancellation Reason */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
              <p className="text-xs text-amber-700 font-semibold mb-2">
                Common Reasons:
              </p>
              <ul className="text-xs text-amber-700 space-y-1">
                <li>• Payment method declined</li>
                <li>• Insufficient funds</li>
                <li>• Browser/connection interrupted</li>
                <li>• User cancelled transaction</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-4">
              <button
                onClick={handleRetryPayment}
                className="w-full btn bg-[#CAEB66] text-[#1a1a2e] font-bold rounded-lg hover:bg-[#b8d654] transition-colors"
              >
                Retry Payment
              </button>

              <Link
                to="/send-parcel"
                className="w-full btn border-2 border-[#CAEB66] text-[#CAEB66] bg-transparent font-bold rounded-lg hover:bg-[#CAEB66] hover:text-[#1a1a2e] transition-colors flex items-center justify-center gap-2"
              >
                <FiArrowLeft className="w-4 h-4" />
                Edit Parcel Details
              </Link>

              <Link
                to="/"
                className="w-full btn border-2 border-gray-300 text-gray-700 bg-white font-bold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </Link>
            </div>

            {/* Saved Draft Info */}
            <div className="p-4 bg-blue-50 rounded-lg text-center text-sm">
              <p className="text-blue-700 font-medium">
                💡 Good news! Your parcel information has been saved.
              </p>
              <p className="text-blue-600 text-xs mt-1">
                You can continue from where you left off.
              </p>
            </div>

            {/* Support Section */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-sm border-t border-gray-200">
              <p className="text-gray-600 mb-2">Having trouble?</p>
              <p className="font-semibold text-[#1a1a2e] mb-2">
                Contact Our Support Team
              </p>
              <div className="space-y-1 text-gray-600 text-xs">
                <p>📧 support@zapshift.com</p>
                <p>📞 +880 1XXX-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            ✓ Your data is secure • No charges made • 100% Safe
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancelPayment;