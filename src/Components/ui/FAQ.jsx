import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes. It is designed to fit most body types with adjustable straps, making it suitable for both men and women.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Regular use combined with proper posture habits can help reduce discomfort and improve posture over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some models include vibration reminders to help you maintain proper posture throughout the day.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe with your email, and we'll notify you as soon as the product becomes available.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-800">
            Frequently Asked Question (FAQ)
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-7">
            Enhance posture, mobility, and well-being effortlessly with
            Posture Pro. Achieve proper alignment, reduce pain, and strengthen
            your body with ease!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                active === index
                  ? "border-cyan-400 bg-cyan-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-slate-800">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FiChevronUp className="text-xl text-slate-700" />
                ) : (
                  <FiChevronDown className="text-xl text-slate-700" />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-cyan-200 pt-5">
                    <p className="text-gray-600 leading-7">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-3 bg-primary hover:brightness-95 transition px-7 py-4 rounded-full font-semibold text-slate-900">
            See More FAQ's
            <span className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <FiArrowUpRight className="text-lg" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;