import truck from '../../assets/bookingicon.png'
const HowItWorks = () => {
     const features = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      id: 3,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time."
    }
  ];
    return (
        <div className="bg-gray-100 px-4 py-16 md:px-8 md:py-24  my-12.5">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How it Works
        </h2>
 
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-6 transition-all duration-300 hover:bg-[#CAEB66] hover:shadow-lg cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-4">
                <div  className="w-12 h-12 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
<img src={truck} alt="BookingTruckPng" />
                </div>
              </div>
 
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
 
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    );
};

export default HowItWorks;