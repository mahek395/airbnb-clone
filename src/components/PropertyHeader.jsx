import { propertyData } from "../data/propertyData";

export default function PropertyHeader() {
  return (
    <div className="summary-head">
      <div>
        <h2>
          {propertyData.propertyType} in {propertyData.locationShort}
        </h2>
        <p className="summary-meta">
          {propertyData.guests} guests · {propertyData.bedrooms} bedroom · {propertyData.beds}{" "}
          bed · {propertyData.bathrooms} bathroom
        </p>
      </div>
      
    </div>
  );
}
