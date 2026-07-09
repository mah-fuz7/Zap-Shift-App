import  { useState } from 'react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('story');

  const tabContent = {
    story: {
      title: 'Story',
      paragraphs: [
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time."
      ]
    },
    mission: {
      title: 'Mission',
      paragraphs: [
        "Our mission is to revolutionize parcel delivery by providing fast, reliable, and transparent services to every customer. We believe in building trust through accountability, innovation, and genuine care for both senders and receivers.",
        "We're committed to sustainability and responsible logistics practices that minimize environmental impact while maximizing delivery efficiency.",
        "Every parcel matters to us, and we treat yours with the same care we'd want for our own."
      ]
    },
    success: {
      title: 'Success',
      paragraphs: [
        "Success for us means more than just numbers. It's about the satisfied smiles on our customers' faces when their parcels arrive on time.",
        "We've successfully delivered thousands of shipments with a 98% on-time delivery rate. Our advanced tracking system gives customers peace of mind every step of the way.",
        "Our team of dedicated riders and logistics experts work tirelessly to ensure every delivery is a success story."
      ]
    },
    team: {
      title: 'Team & Others',
      paragraphs: [
        "Our team is composed of passionate individuals who are dedicated to making delivery better. From logistics experts to customer service specialists, everyone plays a crucial role.",
        "We believe in the power of collaboration. Our drivers, administrators, and support staff work together seamlessly to serve you better.",
        "We're always hiring talented people who share our vision. If you'd like to be part of our growing team, reach out to us!"
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-8 border-b border-gray-300 pb-4">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-medium transition-colors pb-2 ${
                  activeTab === tab
                    ? 'text-gray-900 border-b-2 border-yellow-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {currentContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}