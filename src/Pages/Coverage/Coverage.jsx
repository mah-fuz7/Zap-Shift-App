import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const centers = useLoaderData();
  const mapRef = useRef(null);

  const position = [23.685, 90.3563];

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value.trim();

    if (!location) return;

    const district = centers.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 15, {
        duration: 2,
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#12372A]">
            We are available in 64 districts
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Search your district to explore our delivery coverage and service
            availability across Bangladesh.
          </p>
        </div>

        {/* Search Box */}
        <div className="mt-12 max-w-3xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-2 flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex items-center flex-1 w-full px-4">
              <FiSearch className="text-2xl text-gray-400" />

              <input
                type="text"
                name="location"
                placeholder="Search district..."
                className="w-full px-4 py-4 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-xl transition duration-300 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[650px] w-full"
            ref={mapRef}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {centers.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">{center.city}</h3>

                    <p>
                      <span className="font-semibold">Covered Areas:</span>
                    </p>

                    <p className="text-gray-600">
                      {center.covered_area.join(", ")}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Coverage;