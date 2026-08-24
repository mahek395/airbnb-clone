import { ChevronRight, Home, Minus, Plus } from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function LocationSection() {
  return (
    <section className="page-shell full-section">
      <h2 className="section-title">Where you&apos;ll be</h2>
      <p className="location-kicker">{propertyData.locationFull}</p>
      <div className="map-frame">
        <div className="map-canvas" aria-hidden="true" />
        <div className="map-water" aria-hidden="true" />
        <div className="map-road h" aria-hidden="true" />
        <div className="map-road v" aria-hidden="true" />
        <div className="map-pin" aria-label="Property location in Candolim">
          <Home size={22} strokeWidth={2.3} />
        </div>
        <div className="map-zoom">
          <button type="button" aria-label="Zoom in">
            <Plus size={16} />
          </button>
          <button type="button" aria-label="Zoom out">
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="location-note">Exact location will be provided after booking.</p>

      <h3 className="neighborhood-title">Neighbourhood highlights</h3>
      <p className="neighborhood-copy">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches,
        cafés, and popular attractions.
      </p>
      <button type="button" className="show-more neighborhood-more">
        Show more
        <ChevronRight size={16} />
      </button>
    </section>
  );
}
