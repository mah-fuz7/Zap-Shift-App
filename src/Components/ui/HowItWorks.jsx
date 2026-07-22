import truck from '../../assets/bookingicon.png';

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
    <div className="bg-gray-100 px-4 py-12 md:px-12 lg:px-16 md:py-24 my-6 md:my-16 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center md:text-left">
          How it Works
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 transition-all duration-300 hover:bg-[#CAEB66] hover:shadow-lg cursor-pointer group flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              {/* Icon Container */}
              <div className="mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <img 
                    src={truck} 
                    alt="Booking Truck Icon" 
                    className="w-full h-full object-contain" 
                  />
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