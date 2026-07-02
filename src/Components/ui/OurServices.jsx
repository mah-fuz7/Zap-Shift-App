
import servicepng from '../../assets/service.png'
const OurServices = () => {
     const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available within 6–8 hours from pick-up to drop-off",
      highlighted: false
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      highlighted: true
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      highlighted: false
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product",
      highlighted: false
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
      highlighted: false
    },
    {
      id: 6,
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow customers to return or exchange their products with online business merchants.",
      highlighted: false
    }
  ];
 
    return (
            <section className="bg-[#1a4d5c] px-6 py-16 md:px-8 md:py-24 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
 
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12.5">
          {services.map((service) => (
            <div
              key={service.id}
              className= {"rounded-2xl p-8   bg-white hover:bg-[#CAEB66]"}
              
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={'w-12 h-12 '}>
<img src={servicepng} alt="service-png"  />
                </div>
              </div>
 
              {/* Title */}
              <h3 className={`text-lg font-bold mb-4 ${
                service.highlighted ? 'text-gray-900' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
 
              {/* Description */}
              <p className={`text-sm leading-relaxed ${
                service.highlighted ? 'text-gray-800' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    );
};

export default OurServices;