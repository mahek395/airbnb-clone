import { useState } from "react";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { propertyData, uiAssets } from "../data/propertyData";

export default function LocationSection() {
  const [more, setMore] = useState(false);

  return (
    <section className="page-shell full-section">
      <h2 className="section-title">Where you&apos;ll be</h2>
      <p className="location-kicker">{propertyData.locationFull}</p>
      <div className="map-frame">
        <div className="map-canvas" aria-hidden="true" />
        <div className="map-water" aria-hidden="true" />
        <div className="map-road h" aria-hidden="true" />
        <div className="map-road v" aria-hidden="true" />
        <img className="map-pin" src={uiAssets.locationPin} alt="Property location in Candolim" />
        <div className="map-zoom">
          <button type="button" aria-label="Zoom in">
            <Plus size={16} />
          </button>
          <button type="button" aria-label="Zoom out">
            <Minus size={16} />
          </button>
        </div>
      </div>
      <p className="description" style={{ marginTop: 24 }}>
        {propertyData.locationBlurb}
        {more ? ` ${propertyData.locationMore}` : ""}
      </p>
      <button type="button" className="show-more" onClick={() => setMore((v) => !v)}>
        {more ? "Show less" : "Show more"}
        <ChevronRight size={16} />
      </button>
    </section>
  );
}
