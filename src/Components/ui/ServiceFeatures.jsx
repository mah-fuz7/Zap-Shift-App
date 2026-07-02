import liveTracking from "../../assets/live-tracking.png";
import delivery from "../../assets/safe-delivery.png";

const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      image: liveTracking,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: delivery,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      image: delivery,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="space-y-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
              {/* Image */}
              <div className="w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block h-28 border-l border-dashed border-gray-300"></div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#03373D] mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {feature.description}
                </p>
              </div>

              {/* Accent Line */}
              <div className="hidden lg:block w-1 self-stretch rounded-full bg-lime-400"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;