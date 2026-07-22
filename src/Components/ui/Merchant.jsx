import location from "../../assets/location-merchant.png";
import blackBg from "../../assets/download.png";
import BgStyle from "../../assets/be-a-merchant-bg.png";

const Merchant = () => {
  return (
  <div className="px-4 md:px-12 lg:px-16 w-full max-w-7xl mx-auto">
  <section className="max-w-7xl mx-auto px-4 py-20">
      <div
        className="relative overflow-hidden rounded-3xl bg-[#03373D] px-8 py-14 md:px-14"
        style={{
          backgroundImage: `url(${blackBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top Decoration */}
        <img
          src={BgStyle}
          alt=""
          className="absolute top-0 left-0 w-full pointer-events-none"
        />

        <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>

            <p className="mt-6 text-gray-300 leading-8 max-w-lg">
              We offer the lowest delivery charge with the highest value
              along with 100% safety of your product. Pathao courier delivers
              your parcels in every corner of Bangladesh right on time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="btn rounded-full  bg-[#CAEB66] border-none px-8  text-[#03373D] hover:bg-lime-300">
                Become a Merchant
              </button>

              <button className="btn bg-transparent   rounded-full text-[#CAEB66] hover:bg-[#CAEB66] hover:text-[#03373D]">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <img
              src={location}
              alt="Merchant"
              className="max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Merchant;