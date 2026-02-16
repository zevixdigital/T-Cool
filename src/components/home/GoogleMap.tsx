import * as React from "react";

interface GoogleMapProps {
  address?: string;
}

export default function GoogleMap({
  address = "Nirvana Country Road, B Block, Pocket C, Mayfield Garden, Sector 50, Gurgaon 122018 Haryana",
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Google Map Location"
          src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}